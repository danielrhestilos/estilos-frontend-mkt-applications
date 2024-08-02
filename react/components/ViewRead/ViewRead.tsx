import React, { useEffect } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import useLocalStorage from '../../hooks/localStorageHook'

function ViewRead() {
  const { product } = useProduct()
  console.log('productContext -> ', product)
  const [productsV, setProductsV] = useLocalStorage('productsV', [])

  useEffect(() => {
    // Comprobación si el producto ya existe en el arreglo
    const productExists = productsV.some(
      (p: any) => p.productId === product.productId
    )

    if (!productExists) {
      setProductsV([...productsV, product])
    }
  }, [product, productsV, setProductsV])

  return <></>
}

export default ViewRead
