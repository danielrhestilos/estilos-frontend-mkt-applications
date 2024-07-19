import React from 'react'
import { useProduct } from 'vtex.product-context'
import styles from './styles.css'
import { isProductAvailable } from './../../utils/generalUtils'
import useRenderedState from '../../hooks/promotionRenderedHook'
import { canUseDOM } from 'vtex.render-runtime'
import usePromotionData from '../../hooks/promotionCardHook'

function CardShelfCTA(props: any) {
  const productContext = useProduct()
  const { selectedItem } = productContext
  const isAvailable = selectedItem ? isProductAvailable(selectedItem) : false
  const product = productContext?.product ?? {}
  const loadingItem = productContext?.loadingItem ?? false
  const sku = product?.sku ?? {}
  const referenceId = sku?.referenceId ?? []
  const reference = referenceId?.[0] ?? {}
  const valueRefId = reference?.Value ?? 'no-sku'
  const rendered = useRenderedState()

  const dataLocalStorage = canUseDOM
    ? window.sessionStorage.getItem('PromotionsEstilosCard')
    : null

  const haveCollections: any = product.productClusters.find((item: any) =>
    props.collections.includes(item.id)
  )

  const { price } = usePromotionData(selectedItem, dataLocalStorage)
  const seller = selectedItem?.sellers ? selectedItem.sellers[0] : null
  const commertialOffer = seller?.commertialOffer
    ? seller.commertialOffer
    : null

  const itemPrice =
    commertialOffer?.Price !== undefined ? commertialOffer.Price : null

  if (itemPrice === null) {
    return null
  }
  if (!isAvailable) {
    return null
  }
  if (!rendered) {
    return null
  }
  function onNavigateClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (typeof window !== 'undefined') {
      window.open(
        'https://www.tarjetaestilos.com.pe/solicitartarjeta',
        '_blank'
      )
    }
  }

  return (
    !loadingItem &&
    (price != 0 ||
      haveCollections ||
      product?.productName.toLowerCase().startsWith('combo tarjeta')) && (
      <a
        className={styles.shelfCTACard}
        id={`cardBtn${valueRefId}`}
        target="__blank"
        onClick={onNavigateClick}
        href="https://www.tarjetaestilos.com.pe/solicitartarjeta"
      ></a>
    )
  )
}

CardShelfCTA.defaultProps = {
  collections: '(),(),()',
}

CardShelfCTA.schema = {
  title: 'CARD CTA SHELF',
  type: 'object',
  properties: {
    collections: {
      type: 'string',
    },
  },
}

export default CardShelfCTA
