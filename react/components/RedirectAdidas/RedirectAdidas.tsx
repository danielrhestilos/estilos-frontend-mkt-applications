import React from 'react'
import useProduct from 'vtex.product-context/useProduct'
function RedirectAdidas() {
  const productContext = useProduct()
  const { product, loadingItem } = productContext
  console.log('product ', product)
  console.log('loadingItem ', loadingItem)
  if (!loadingItem && product.brand == 'ADIDAS') {
    window.location.href = '/'
  }
  return <></>
}

export default RedirectAdidas
