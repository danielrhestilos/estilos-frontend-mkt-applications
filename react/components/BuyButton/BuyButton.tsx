import React from 'react'
import { useOrderItems } from 'vtex.order-items/OrderItems'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'

function BuyButton() {
  const productContext = useProduct()
  const { product, selectedQuantity } = productContext
  const { productId } = product
  const { addItem } = useOrderItems()
  const toAdd = [
    {
      productId: productId,
      id: product.items[0].itemId,
      imageUrl: product.items[0].images[0].imageUrl,
      quantity: selectedQuantity,
      seller: product.items[0].sellers[0].sellerId,
      name: product.productName,
      price: product.items[0].sellers[0].commertialOffer.Price,
      listPrice: product.items[0].sellers[0].commertialOffer.ListPrice,
      // sellinPrice: product.price.ListPrice,
      brand: product.brand,
      linkText: product.linkText,
    },
  ]

  const afterToBuy = () => {
    window.location.href = '/checkout'
  }
  const onClickBuy = async () => {
    await addItem(toAdd)
    await afterToBuy()
  }

  return (
    <>
      <button className={styles.addButtonPDP} onClick={() => onClickBuy()}>
        AGREGAR AL CARRITO
      </button>
    </>
  )
}

export default BuyButton
