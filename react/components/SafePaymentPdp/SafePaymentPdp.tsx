import React from 'react'
import styles from './SafePaymentPdp.module.css'

interface SafePaymentPdpProps {}

const SafePaymentPdp: React.FC<SafePaymentPdpProps> = () => {
  return (
    <div className={styles.container}>
      <span>Compra segura garantizada: </span>
      <img src="https://estilospe.vtexassets.com/arquivos/bann-pasarella-tarjetas-seguras-290425.svg" />
    </div>
  )
}

export default SafePaymentPdp
