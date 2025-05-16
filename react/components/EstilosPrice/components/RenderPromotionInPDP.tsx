import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedCurrency } from 'vtex.format-currency'
import './styles/styles.css'

const CSS_HANDLES = [
  'promotionEstilos_containerIcon',
  'promotionEstilos_titleName',
  'promotionEstilos_titleProduct',
]

const PromotionMessage = ({ installments }: any) => {
  let defaultMessage = 'Exclusivo pagando con tu Tarjeta Estilos'
  if (installments >= 1) {
    defaultMessage = `A partir de ${installments} cuotas`
  }
  return (
    <div className="lh-solid">
      <span className="f7" style={{ color: '#5A5A5A' }}>
        {defaultMessage}
      </span>
    </div>
  )
}

const PromotionDetails = ({ value, installments }: any) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className="flex w-100 justify-between">
      <div className={`${handles.promotionEstilos_containerIcon} w-40`}></div>
      <div className="w-100 flex" style={{ marginLeft: '5px' }}>
        <div className="w-100">
          <span className={`${handles.promotionEstilos_titleName} f4`}>
            Tarjeta estilos
          </span>
          <PromotionMessage installments={installments} />
        </div>
      </div>
      <div className="w-40 flex justify-end items-center f4">
        <span className={`${handles.promotionEstilos_titleProduct}`}>
          <FormattedCurrency value={value} />
        </span>
      </div>
    </div>
  )
}

const RenderPromotionInPDP = ({ value, installments }: any) => {
  return <PromotionDetails value={value} installments={installments} />
}

export default RenderPromotionInPDP
