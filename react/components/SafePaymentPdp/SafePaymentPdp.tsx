import React from 'react'
import styles from './SafePaymentPdp.module.css'

interface SafePaymentPdpProps {}

const SafePaymentPdp: React.FC<SafePaymentPdpProps> = () => {
  return (
    <div className={styles.container}>
      <span>Transacciones protegidas:</span>
      <img src="https://estilospe.vtexassets.com/arquivos/bann-pasarella-tarjetas-seguras-debito-290425.svg" />
    </div>
  )
}

export default SafePaymentPdp
