import React, { useEffect, useState } from "react"
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import { Spinner } from 'vtex.styleguide'

export interface ProductShelfAvailabilityProps {
  Then: any
  Else: any
}

const CSS_HANDLES = [
  'containerAvailability',
] as const

const ProductShelfAvailability = ({ Then, Else }: ProductShelfAvailabilityProps) => {
  const [isAvailable, setIsAvailable] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const {
    product: { items },
  } = useProduct()

  const handles = useCssHandles(CSS_HANDLES)

  useEffect(() => {
    if (items) {
      items.map((item: { sellers: any[] }) => {
        item.sellers.map((seller) => {
          const {
            commertialOffer: { AvailableQuantity },
          } = seller
          if (AvailableQuantity > 0) {
            setIsAvailable(true)
          }
        })
      })
      setIsLoading(false)
    }
  }, [])

  return <>
    {!isLoading ? (
      isAvailable ? <Then /> : <Else />
    ) : (
      <div className={`flex justify-center ${handles.containerAvailability}`}>
        <Spinner />
      </div>
    )
    }
  </>
}

export default ProductShelfAvailability
