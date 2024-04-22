import React from "react";
import { useCssHandles } from 'vtex.css-handles'
import { FormattedCurrency } from 'vtex.format-currency'
import './styles/styles.css'


const CSS_HANDLES = [
  'promotionEstilos_containerIcon',
  'promotionEstilos_titleName',
  'promotionEstilos_titleProduct'
]

const CurrencyValue = ({ value }: any) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <span className={`${handles.promotionEstilos_titleProduct}`}>
      <FormattedCurrency value={value} />
    </span>
  )
}

const IconContainer = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.promotionEstilos_containerIcon} w-40`}></div>
  )
}

const RenderPromotionInShelf = ({ priceProduct }: any) => {
  return (
    <div className="w-100 flex">
      <div className="w-100 flex justify-start items-center f5">
        <CurrencyValue value={priceProduct} />
      </div>
      <div className="w-100 flex justify-end">
        <IconContainer />
      </div>
    </div>
  )
}

export default RenderPromotionInShelf
