import React, { useState, useEffect } from 'react'

interface OrderData {
  [key: string]: any // Define las propiedades reales según la respuesta de la API
}

interface AuthData {
  token: string // Asegúrate de que 'token' esté definido en la respuesta real
  [key: string]: any
}

interface QRData {
  [key: string]: any // Define las propiedades reales según la respuesta de la API
}

function QR() {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [order, setOrder] = useState<OrderData | null>(null)
  const [auth, setAuth] = useState<AuthData | null>(null)
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

  const fetchOrder = async (): Promise<OrderData> => {
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

  const fetchAuthData = async (): Promise<AuthData> => {
    try {
      const authResponse = await fetch(`https://r4po-proxy.onrender.com/auth`)
      const authData = await authResponse.json()
      setAuth(authData)
      return authData
    } catch (err) {
      throw new Error(err.message || 'Error al obtener datos adicionales')
    }
  }

  const fetchQRData = async (auth: AuthData, order: OrderData) => {
    try {
      if (!auth || !order) {
        throw new Error('Datos requeridos (auth u order) no están disponibles.')
      }

      const data = {
        enabled: true,
        param: [
          {
            name: 'merchantId',
            value: '400000029',
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
            value: 'daniel ramirez',
          },
          {
            name: 'idc',
            value: order?.id || '990554', // Ejemplo de uso de datos únicos de la orden
          },
        ],
        tagType: 'DYNAMIC',
        validityDate: generateValidityDate(),
      }

      const authResponse = await fetch(
        `https://r4po-proxy.onrender.com/generate-qr`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: auth.token, body: data }),
        }
      )
      const QRData = await authResponse.json()
      setQR(QRData)
    } catch (err) {
      throw new Error(err.message || 'Error al generar el código QR')
    }
  }

  const fetchAllData = async () => {
    try {
      setError(null) // Limpiar errores previos
      setLoading(true) // Iniciar el estado de carga

      // Primero obtenemos la orden y los datos de autenticación
      const orderData = await fetchOrder()
      const authData = await fetchAuthData()

      // Luego generamos el QR usando los datos obtenidos
      await fetchQRData(authData, orderData)
    } catch (err) {
      setError(err.message || 'Error inesperado')
    } finally {
      setLoading(false) // Detener el estado de carga
    }
  }

  useEffect(() => {
    if (codeOrder) {
      fetchAllData()
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
          {order && (
            <div>
              <h3>Datos de la Orden:</h3>
              <pre>{JSON.stringify(order, null, 2)}</pre>
            </div>
          )}

          {auth && (
            <div>
              <h3>Datos auth:</h3>
              <pre>{JSON.stringify(auth, null, 2)}</pre>
            </div>
          )}

          {QR && (
            <div>
              <h3>Datos QR:</h3>
              <pre>{JSON.stringify(QR, null, 2)}</pre>
              <img src={QR.tagImg} height={'133px'} width={'133px'} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default QR
