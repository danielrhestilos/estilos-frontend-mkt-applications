import React, { useState, useEffect } from 'react'

interface OrderData {
  [key: string]: any // Define las propiedades reales según la respuesta de la API
}

interface QRData {
  [key: string]: any // Define las propiedades reales según la respuesta de la API
}

function QR() {
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
            value: '341198024', // consultar a niubiz si debido a etsa diferencia falla al prueba en su plataforma (ellos tienen otra)
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
            value: JSON.stringify({
              orderId: order.orderId,
            }),
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

      // Primero obtenemos la orden y los datos de autenticación
      const orderData = await fetchOrder(codeOrder)

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
            <div>
              {/* <h3>Datos QR:</h3>
              <pre>{JSON.stringify(QR, null, 2)}</pre> */}
              <img src={QR.message.tagImg} height={'133px'} width={'133px'} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default QR
