import React, { useEffect } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import useLocalStorage from '../../hooks/localStorageHook'

function ViewRead() {
  const { product } = useProduct()
  const [productsV, setProductsV] = useLocalStorage('productsV', [])
  // Create our number formatter.
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  useEffect(() => {
    // Comprobación si el producto ya existe en el arreglo
    const productExists = productsV.some(
      (p: any) => p.productId === product.productId
    )
    // console.log('product.priceRange.listPrice.lowPrice ', product.priceRange)
    // console.log('product.priceRange.sellingPrice.lowPrice ', product.priceRange)

    if (
      !productExists &&
      product.priceRange.listPrice.highPrice != 0 &&
      product.priceRange.sellingPrice.highPrice != 0
    ) {
      const newProducts = [
        {
          ...product,
          listPriceFormated: formatter.format(
            product.priceRange.listPrice.lowPrice
          ),
          bestPriceFormated: formatter.format(
            product.priceRange.sellingPrice.lowPrice
          ),
        },
        ...productsV,
      ]

      // Limitar a un máximo de 20 elementos
      if (newProducts.length > 20) {
        newProducts.pop() // Eliminar el elemento más antiguo
      }

      setProductsV(newProducts)
    }
  }, [product /*,
    -productsV, setProductsV*/])

  return <></>
}

export default ViewRead
