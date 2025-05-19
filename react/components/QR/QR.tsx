import React, { useState, useEffect } from 'react'
import styles from './QR.module.css'
import { useWebSocket } from '../../utils/useWebSocket'

interface OrderData {
  [key: string]: any
}

interface QRData {
  [key: string]: any
}

function QR() {
  const { message, connect, sendMessage, timeLeft , resetTimeout} = useWebSocket( 300 * 1000)

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [order, setOrder] = useState<OrderData | null>(null)
  const [QR, setQR] = useState<QRData | null>(null)

  const search = window?.location?.search
  const codeOrder = search.split('=')[1]?.split(',')[0]

  function generateValidityDate() {
    const today = new Date()
    today.setDate(today.getDate() + 2)

    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = today.getFullYear()

    return `${day}${month}${year}`
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
    try {
      if (!order) throw new Error('Datos de orden no disponibles.')

        const data = {
          transactionAmount: order?.paymentTotal || '0',
          additionalData: `orderId:${order?.orderId}`,
          idc: order?.sequence || '0',
          validityDate: generateValidityDate(),
        }

      const authResponse = await fetch(
        `https://vtexest.estilos.com.pe/rp3/generate_qr`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      )
      const QRData = await authResponse.json()
      setQR(QRData)
    } catch (err) {
      setError(err.message || 'Error al generar el código QR')
    }
  }

  const fetchAllData = async (codeOrder: string) => {
    try {
      setError(null)
      setLoading(true)
  
      const orderData = await fetchOrder(codeOrder)
  
      // Solo conectar si el tipo de pago es 17
      if (orderData.paymentType === '17') {
        connect('wss://vtexest.estilos.com.pe')
        sendMessage(orderData.orderId)
        await fetchQRData(orderData)
      }
  
    } catch (err) {
      setError(err.message || 'Error inesperado')
    } finally {
      setLoading(false)
    }
  }

  const handleGenerateNewQR = async () => {
    resetTimeout()

    if (order && order.paymentType === '17') {
      setError(null)
      setLoading(true)
      connect('wss://vtexest.estilos.com.pe') // reiniciar WebSocket
      sendMessage(order.orderId) // reiniciar tiempo
      await fetchQRData(order)
      setLoading(false)
    }
  }
  const formatCountdown = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  useEffect(() => {
    if (codeOrder) {
      fetchAllData(codeOrder)
    } else {
      setError('Código de orden no encontrado en la URL.')
      setLoading(false)
    }
  }, [codeOrder, message])

  return (
    <div>
      {loading &&  
      <div className={styles.containerLogo}><img
        style={{ display: 'block', height: '40px' }}
        src="https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/3164cf61-4213-4d7b-b029-54f8a4581a9e___df2ddf41ed9dc9522f6eb3f32abc5572.gif"
      /></div>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          {order && QR && order.paymentType == '17' && (
            <div>
              <>
                {order.status == 'payment-pending' && !message ? (
                  <>
                    <h2 className={styles.messageTitle}>⏱️Pago pendiente</h2>
                    <div className={styles.containerQR}>
                      <img src={QR.message.tagImg} className={styles.tagImg}/>
                      <section className={styles.containerQRText}>
                      <p>¡Estás a solo un paso! Escanea el QR con tu billetera digital preferida para pagar y evitar que se cancele tu pedido pendiente.</p>
                        <div>
                          <img
                            className={styles.imgWallets}
                            src={'https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/073c15f6-3269-4505-a23e-aecf3bf38ec0___29e9b25ce18eb99b8aac0af67846dcc6.png'}
                            alt="Código QR"
                          />
                        </div>
                        
                        <p>Tiempo restante: {formatCountdown(timeLeft)}</p>
                        {timeLeft <= 0 && (
                          <button className={styles.regenerateButton} onClick={handleGenerateNewQR}>
                            Generar nuevo QR
                          </button>
                        )}
                      </section>
                    </div>
                    <p className={styles.containerThanks}>
                      <ul>
                        <li>Monto pendiente: S/{order.paymentTotal}</li>
                        <li>Método de Pago: Billetera Digital</li>
                        <li>IDC: {order.sequence}</li>
                      </ul>
                    </p>
                  </>
                ) : (
                  <div className={styles.containerThanks}>
                    <h1 className={styles.titleThanks}>🎊¡Gracias por comprar con nosotros!🎊</h1>
                    <p>
                      Estamos procesando el pago, en pocos minutos recibirás un e-mail de confirmación de compra.
                      Enviaremos el mail con todos los datos de tu compra.
                    </p>
                    {message?.purchaseNumber && (
                      <>
                        <h2>Pago confirmado</h2>
                        <ul>
                          <li>Numero de compra Niubiz: {message.purchaseNumber}</li>
                          <li>Monto pagado: S/{message.transactionAmount}</li>
                          <li>Moneda: PEN</li>
                          <li>Fecha de transacción: {message.transactionDate}</li>
                          <li>Tarjeta: {message.maskCard}</li>
                          <li>Billetera Digital: {message.wallet}</li>
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </>
            </div>
          )}

          {order && QR && order.paymentType !== '17' && (
            <>
              <h1 className={styles.titleThanks}>¡Gracias por comprar con nosotros!</h1>
              <p>
                Estamos procesando el pago, en pocos minutos recibirás un e-mail de confirmación de compra.
                Enviaremos el mail con todos los datos de tu compra.
              </p>
              <h2>Pago confirmado</h2>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default QR