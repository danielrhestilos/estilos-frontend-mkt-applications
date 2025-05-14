import React, { useState, useEffect } from 'react'
import styles from './QR.module.css'
import { useWebSocket } from '../../utils/useWebSocket'
interface OrderData {
  [key: string]: any // Define las propiedades reales según la respuesta de la API
}

interface QRData {
  [key: string]: any // Define las propiedades reales según la respuesta de la API
}

function QR() {
  const { message, connect, sendMessage } = useWebSocket()

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [order, setOrder] = useState<OrderData | null>(null)
  const [QR, setQR] = useState<QRData | null>(null)

  // Extraer el código de orden de la URL
  const search = window?.location?.search
  const codeOrder = search.split('=')[1]?.split(',')[0]

  function generateValidityDate() {
    const today = new Date() // Fecha actual
    today.setDate(today.getDate() + 2) // Sumar 2 días

    const day = String(today.getDate()).padStart(2, '0') // Día con 2 dígitos
    const month = String(today.getMonth() + 1).padStart(2, '0') // Mes con 2 dígitos
    const year = today.getFullYear() // Año completo

    return `${day}${month}${year}` // Formato "ddMMyyyy"
  }

  const fetchOrder = async (codeOrder: string): Promise<OrderData> => {
    try {
      const orderResponse = await fetch(`/_v/validate-order/${codeOrder}-01`)

      if (!orderResponse.ok) {
        throw new Error(
          `Error ${orderResponse.status}: ${orderResponse.statusText}`
        )
      }
      const orderData = await orderResponse.json()
      setOrder(orderData)
      return orderData
    } catch (err) {
      throw new Error(err.message || 'Error al obtener datos de la orden')
    }
  }

  const fetchQRData = async (order: OrderData) => {
    console.log('order: ', order)
    try {
      if (!order) {
        throw new Error('Datos requeridos (auth u order) no están disponibles.')
      }
      const data = {
        enabled: true,
        param: [
          {
            name: 'merchantId',
            value: '400000030', // consultar a niubiz si debido a etsa diferencia falla al prueba en su plataforma (ellos tienen otra)
          },

          {
            name: 'transactionCurrency',
            value: '604',
          },
          {
            name: 'transactionAmount',
            value: order?.paymentTotal || 12, // Ejemplo de cómo usar datos de la orden
          },
          {
            name: 'additionalData',
            value: `orderId:${order.orderId}`,
          },
          {
            name: 'idc',
            value: order?.sequence || '990554', // Ejemplo de uso de datos únicos de la orden
          },
        ],
        tagType: 'DYNAMIC',
        validityDate: generateValidityDate(),
      }
      const authResponse = await fetch(
        `https://vtexest.estilos.com.pe/rp3/generate_qr`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
      const QRData = await authResponse.json()
      setQR(QRData)
    } catch (err) {
      throw new Error(err.message || 'Error al generar el código QR')
    }
  }

  const fetchAllData = async (codeOrder: string) => {
    try {
      setError(null) // Limpiar errores previos
      setLoading(true) // Iniciar el estado de carga

      connect('wss://vtexest.estilos.com.pe')

      // Primero obtenemos la orden y los datos de autenticación
      const orderData = await fetchOrder(codeOrder)

      sendMessage(orderData.orderId)

      // Luego generamos el QR usando los datos obtenidos
      await fetchQRData(orderData)
    } catch (err) {
      setError(err.message || 'Error inesperado')
    } finally {
      setLoading(false) // Detener el estado de carga
    }
  }

  useEffect(() => {
    if (codeOrder) {
      fetchAllData(codeOrder)
    } else {
      setError('Código de orden no encontrado en la URL.')
      setLoading(false)
    }
  }, [codeOrder])

  return (
    <div>
      {loading && <p>Cargando datos...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          {order && QR && order.paymentType == '17' && (
            <div className={styles.containerQR}>
              <img src={QR.message.tagImg} height={'133px'} width={'133px'} />
              <section>
                <h2>Pago pendiente</h2>
                <p>
                  Le informamos que su pedido aún está pendiente de pago. A
                  continuación, revise los detalles del pedido, realice el pago
                  y evite la anulación de tu compra.
                </p>
                <p>
                  <ul>
                    <li>Monto pendiente: S/{order.paymentTotal}</li>
                    <li>Método de Pago: Billetera Digital</li>
                    <li>IDC: {order.sequence}</li>
                  </ul>
                </p>
                <p>Socket message: {message}</p>
              </section>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default QR
