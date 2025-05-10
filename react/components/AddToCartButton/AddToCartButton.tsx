import React, { useEffect, useMemo, useState } from 'react'
import { useOrderItems } from 'vtex.order-items/OrderItems'
import { useProduct, useProductDispatch } from 'vtex.product-context'
import { Button, Tooltip } from 'vtex.styleguide'
import { canUseDOM } from 'vtex.render-runtime'
import { usePixel } from 'vtex.pixel-manager'

import { mapCatalogItemToCart } from './modules/catalogItemToCart'
import {
  mapSkuItemForPixelEvent,
  getDefaultSeller,
} from './modules/analyticsUtils'

interface AddToCartButtonProps {
  titleButton: string
  titlePreButton?: string
}

const AddToCartButton = ({
  titleButton,
  titlePreButton,
}: AddToCartButtonProps) => {
  const [itemWarranty, setItemWarranty]: any = useState([])
  const { addItem } = useOrderItems()
  const productContextDispatch = useProductDispatch()
  const contextPdp = useProduct()
  const { push } = usePixel()
  const {
    selectedItem,
    selectedQuantity,
    skuSelector: { areAllVariationsSelected },
    product,
    assemblyOptions,
  } = contextPdp

  const seller = getDefaultSeller(selectedItem?.sellers)

  const skuItems = useMemo(
    () =>
      mapCatalogItemToCart({
        product,
        selectedItem,
        selectedQuantity,
        selectedSeller: seller,
        assemblyOptions,
      }),
    [assemblyOptions, product, selectedItem, selectedQuantity, seller]
  )

  const pixelEventItems = skuItems.map(mapSkuItemForPixelEvent)

  /**
   * The function `addAllItemsToCart` adds an item and its warranty (if applicable) to the cart.
   * @param {any} warranty - The `warranty` parameter is an object that represents the warranty
   * information for an item. It is used to determine if a warranty should be added to the cart along
   * with the selected item.
   */
  const addAllItemsToCart = (warranty: any) => {
    const tempArrayTocart = [
      {
        id: selectedItem?.itemId,
        seller: selectedItem?.sellers[0].sellerId,
        quantity: selectedQuantity,
        skuName: selectedItem.name,
        name: product.productName,
      },
    ]

    if (Object.keys(warranty).length) {
      tempArrayTocart.push(warranty)
    }

    addItem(tempArrayTocart)
    push({ event: 'addToCart', items: pixelEventItems })
  }

  useEffect(() => {
    const handleAddingListener = (event: any) => {
      let tempArray = {}

      if (event.detail.productInfoActual) {
        tempArray = {
          id: event.detail.productInfoActual?.itemId,
          seller: event.detail.productInfoActual?.sellers[0].sellerId,
          quantity: 1,
          skuName: event.detail.productInfoActual.name,
          name: contextPdp.product.productName,
        }
      }

      setItemWarranty(tempArray)
    }

    if (canUseDOM) {
      document.addEventListener('addingListener', handleAddingListener)
    }

    return () => {
      document.removeEventListener(
        'addingListener',
        handleAddingListener,
        false
      )
    }
  }, [contextPdp, itemWarranty])

  /**
   * The function `handleAddToCart` adds an item to the cart and triggers a pixel event for tracking.
   */
  const handleAddTocart = () => {
    if (productContextDispatch) {
      productContextDispatch({
        type: 'SET_BUY_BUTTON_CLICKED',
        args: { clicked: true },
      })
    }

    if (areAllVariationsSelected) {
      addAllItemsToCart(itemWarranty)
    }
  }

  const ButtonWithLabel = (
    <Button
      onClick={() => {
        handleAddTocart()
      }}
      block
    >
      {titleButton}
    </Button>
  )
  const ButtonWithLabelPre = (
    <Button
      variation="secondary"
      onClick={() => {
        handleAddTocart()
      }}
      block
    >
      {titlePreButton}
    </Button>
  )

  return (
    <>
      {selectedItem?.sellers[0].commertialOffer.AvailableQuantity !== 0 ? (
        areAllVariationsSelected ? (
          ButtonWithLabel
        ) : (
          <Tooltip
            trigger="click"
            duration={200}
            label={'Debes elegir color y talla'}
          >
            {ButtonWithLabelPre}
          </Tooltip>
        )
      ) : (
        <Button disabled> No disponible </Button>
      )}
    </>
  )
}

AddToCartButton.defaultProps = {
  titleButton: 'Agregar al carrito',
}

AddToCartButton.schema = {
  title: 'Botón de agregar al carrito',
  description: 'Agregar al carrito',
  type: 'object',
  properties: {
    titleButton: {
      title: 'Texto en el botón',
      description: '',
      type: 'string',
      default: 'Agregar al carrito',
    },
  },
}

export default AddToCartButton
