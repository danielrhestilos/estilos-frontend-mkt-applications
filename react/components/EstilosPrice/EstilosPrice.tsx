import React from 'react'
import { useProduct } from 'vtex.product-context'
import { isProductAvailable } from './../../utils/generalUtils'
import RenderPromotionInShelf from './components/RenderPromotionInShelf'
import RenderPromotionInPDP from './components/RenderPromotionInPDP'
import usePromotionData from '../../hooks/promotionCardHook'
// import useRenderedState from '../../hooks/promotionRenderedHook'
// import { canUseDOM } from 'vtex.render-runtime'

const EstilosPrice = ({ view }: any) => {
  const { selectedItem } = useProduct()
  const isAvailable = selectedItem ? isProductAvailable(selectedItem) : false
  // const rendered = useRenderedState()
  // const dataLocalStorage = canUseDOM
  //   ? window.sessionStorage.getItem('PromotionsEstilosCard')
  //   : null
  // const { value, installments } = usePromotionData(selectedItem)
  const promotionData = usePromotionData(selectedItem)
  const { value, installments } = promotionData

  if (!isAvailable || value === 0) {
    return null
  }

  const PromotionComponent =
    view === 'pdp' ? RenderPromotionInPDP : RenderPromotionInShelf

  // return <div></div>
  return true ? (
    <PromotionComponent value={value} installments={installments} />
  ) : null
}

export default EstilosPrice
