
import React, { useEffect, useState } from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { FormattedCurrency } from 'vtex.format-currency'
import { Progress } from 'vtex.styleguide'
import { index as RichText } from 'vtex.rich-text'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'freeShippingContainer',
  'freeShippingText',
  'freeShippingProgress',
] as const

interface FreeShippingProps {
  valueFreeShipping: number
  labelFreeShipping: Labels
}

interface Labels {
  initialLabel: string
  finalLabel: string
  freeShippingLabel: string
}

const FreeShipping: StorefrontFunctionComponent<FreeShippingProps> = ({
  valueFreeShipping,
  labelFreeShipping,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const {
    orderForm: { value },
  } = useOrderForm()

  const [valueToGetFreeShipping, setValueToGetFreeShipping]: any = useState(0)
  const [valuePercentage, setValuePercentage]: any = useState(0)

  const totalValueToGetFreeShipping = value / 100

  /* This is a `useEffect` hook that is used to update the state variables `valueToGetFreeShipping` and
  `valuePercentage` whenever the `valueFreeShipping` or `totalValueToGetFreeShipping` variables
  change. */
  useEffect(() => {
    setValueToGetFreeShipping(
      valueFreeShipping - totalValueToGetFreeShipping <= 0
        ? 0
        : valueFreeShipping - totalValueToGetFreeShipping
    )
    setValuePercentage(
      (totalValueToGetFreeShipping / valueFreeShipping) * 100 >= 100
        ? 100
        : (totalValueToGetFreeShipping / valueFreeShipping) * 100
    )
  }, [valueFreeShipping, totalValueToGetFreeShipping])

  const completeProgress = valuePercentage < 100 ? 'inProgress' : 'completed'

  return (
    <div className={handles.freeShippingContainer}>
      {valueToGetFreeShipping !== 0 ? (
        <div
          className={`${handles.freeShippingText} flex items-center justify-center`}
        >
          <RichText text={labelFreeShipping.initialLabel} />
          &nbsp;
          <FormattedCurrency value={valueToGetFreeShipping} />
          &nbsp;
          <RichText text={labelFreeShipping.finalLabel} />
        </div>
      ) : (
        <div
          className={`${handles.freeShippingText} flex items-center justify-center`}
        >
          <RichText text={labelFreeShipping.freeShippingLabel} />
        </div>
      )}
      <div className={`${handles.freeShippingProgress}--${completeProgress}`}>
        <Progress type="line" slim percent={valuePercentage} />
      </div>
    </div>
  )
}

FreeShipping.defaultProps = {
  valueFreeShipping: 119900,
  labelFreeShipping: {
    initialLabel: 'Te faltan',
    finalLabel: 'para que tu envío sea gratuito.',
    freeShippingLabel: 'Alcanzaste la meta! Tu envío ahora es **GRATUITO**',
  },
}

FreeShipping.schema = {
  title: 'FreeShipping',
  description: 'FreeShipping',
  type: 'object',
  properties: {
    valueFreeShipping: {
      title: 'Value Free Shipping',
      description: 'Value Free Shipping',
      type: 'number',
      default: null,
    },
    labelFreeShipping: {
      title: 'Label Free Shipping',
      description: 'Label Free Shipping',
      type: 'object',
      properties: {
        initialLabel: {
          title: 'Initial Label',
          description: 'Initial Label',
          type: 'string',
          default: null,
        },
        betweenLabel: {
          title: 'Between Label',
          description: 'Between Label',
          type: 'string',
          default: null,
        },
        finalLabel: {
          title: 'Final Label',
          description: 'Final Label',
          type: 'string',
          default: null,
        },
        freeShippingLabel: {
          title: 'Free Shipping Label',
          description: 'Free Shipping Label',
          type: 'string',
          default: null,
        },
      },
    },
  },
}

export default FreeShipping
