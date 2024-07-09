import React from 'react'
import styles from './styles.css'

import { useProduct } from 'vtex.product-context'
import { isProductAvailable } from './../../utils/generalUtils'

import usePromotionData from '../../hooks/promotionCardHook'
import useRenderedState from '../../hooks/promotionRenderedHook'
import { canUseDOM } from 'vtex.render-runtime'

const CardCTA = () => {
  const ctxProduct = useProduct()
  const { selectedItem } = ctxProduct
  const isAvailable = selectedItem ? isProductAvailable(selectedItem) : false
  const rendered = useRenderedState()
  const dataLocalStorage = canUseDOM
    ? window.sessionStorage.getItem('PromotionsEstilosCard')
    : null
  const { price } = usePromotionData(selectedItem, dataLocalStorage)
  // console.log('price ', price);

  if (!isAvailable) {
    return null
  }

  // Verificaciones para evitar errores de undefined
  const seller = selectedItem?.sellers ? selectedItem.sellers[0] : null
  // console.log('seller ', seller);

  const commertialOffer = seller?.commertialOffer
    ? seller.commertialOffer
    : null
  // console.log('commertialOffer', commertialOffer);

  const itemPrice =
    commertialOffer?.Price !== undefined ? commertialOffer.Price : null
  // console.log('itemPrice', itemPrice);

  // Si no hay precio, no se muestra la tarjeta
  if (itemPrice === null) {
    return null
  }

  const ahorro = itemPrice - price

  return rendered ? (
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
        {price != 0 ? (
          <p className={styles.cta}>
            Ahorra <strong>S/ {ahorro.toFixed(2)}</strong> con tarjeta Estilos
          </p>
        ) : (
          <p className={styles.cta}>
            Compra con tarjeta Estilos y accede a nuestros beneficios
          </p>
        )}
        <p className={styles.cta}>
          ¿Aún no la tienes?{' '}
          <span className={styles.here}>¡Solicítala aquí!</span>
        </p>
      </div>
    </a>
  ) : null
}

export default CardCTA
