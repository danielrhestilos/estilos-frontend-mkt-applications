import React from 'react'
import styles from './styles.css'

import { useProduct } from 'vtex.product-context'
import { isProductAvailable } from './../../utils/generalUtils'

const CardCTA = () => {
  const ctxProduct = useProduct()
  const { selectedItem } = ctxProduct
  const isAvailable = selectedItem ? isProductAvailable(selectedItem) : false

  if (!isAvailable) {
    return null
  }

  const seller = selectedItem?.sellers ? selectedItem.sellers[0] : null

  const commertialOffer = seller?.commertialOffer
    ? seller.commertialOffer
    : null

  const itemPrice =
    commertialOffer?.Price !== undefined ? commertialOffer.Price : null

  if (itemPrice === null) {
    return null
  }

  return true ? (
    <a
      className={styles.cardContainer}
      href="https://www.tarjetaestilos.com.pe/solicitartarjeta"
      target="__blank"
    >
      <img
        src="https://estilospe.vtexassets.com/arquivos/estiloscard.svg"
        alt="Estilos Card"
        style={{ height: '27px' }}
      />
      <div className={styles.ctaContainer}>
        <p className={styles.cta}>¡Un mundo de beneficios para ti!</p>
        <p className={styles.cta}>
          ¿Aún no la tienes?{' '}
          <span className={styles.here}>¡Solicítala aquí!</span>
        </p>
      </div>
    </a>
  ) : null
}

export default CardCTA
