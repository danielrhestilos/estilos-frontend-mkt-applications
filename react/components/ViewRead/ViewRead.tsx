import React, { useEffect } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import useLocalStorage from '../../hooks/localStorageHook'

function ViewRead() {
  const { product } = useProduct()
  const [productsV, setProductsV] = useLocalStorage('productsV', [])

  useEffect(() => {
    // Comprobación si el producto ya existe en el arreglo
    const productExists = productsV.some(
      (p: any) => p.productId === product.productId
    )

    if (!productExists) {
      const newProducts = [product, ...productsV]

      // Limitar a un máximo de 20 elementos
      if (newProducts.length > 20) {
        newProducts.pop() // Eliminar el elemento más antiguo
      }

      setProductsV(newProducts)
    }
  }, [product, productsV, setProductsV])

  return <></>
}

export default ViewRead
