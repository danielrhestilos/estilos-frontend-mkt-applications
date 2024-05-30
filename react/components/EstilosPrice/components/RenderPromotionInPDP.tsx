import React from "react";
import { useCssHandles } from 'vtex.css-handles'
import { FormattedCurrency } from 'vtex.format-currency'
import './styles/styles.css'

const CSS_HANDLES = [
  'promotionEstilos_containerIcon',
  'promotionEstilos_titleName',
  'promotionEstilos_titleProduct'
]

const PromotionMessage = ({ installments }: any) => {
  let defaultMessage = 'Exclusivo pagando con tu Tarjeta Estilos'

  if (installments >= 1) {
    defaultMessage = `Válido a ${installments} cuotas o más`
  }

  return (
    <div className="lh-solid">
      <span className="f7">{defaultMessage}</span>
    </div>
  )
}
                                          
const PromotionDetails = ({ priceProduct, installments }: any) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className="flex w-100 justify-between">
      <div className="w-100 flex">
        <div className="w-100">
          <span className={`${handles.promotionEstilos_titleName} f4`}>
            Tarjeta estilos
          </span>
          <PromotionMessage installments={installments} />
        </div>
        <div className={`${handles.promotionEstilos_containerIcon} w-40`}></div>
      </div>
      <div className="w-40 flex justify-end items-center f4">
        <span className={`${handles.promotionEstilos_titleProduct}`}>
          <FormattedCurrency value={priceProduct} />
        </span>
      </div>
    </div>
  )
}

const RenderPromotionInPDP = ({ priceProduct, installments }: any) => {
  return (
    <PromotionDetails priceProduct={priceProduct} installments={installments} />
  )
}

export default RenderPromotionInPDP
