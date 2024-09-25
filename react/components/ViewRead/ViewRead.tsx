import React, { useEffect } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import useLocalStorage from '../../hooks/localStorageHook'

function ViewRead() {
  const { product } = useProduct()
  const [productsV, setProductsV] = useLocalStorage('productsV', [])
  // Create our number formatter.
  // const formatter = new Intl.NumberFormat('es-PE', {
  //   style: 'currency',
  //   currency: 'PEN',

  // })

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
        // {
        //   ...product,
        //   listPriceFormated: formatter.format(
        //     product.priceRange.listPrice.lowPrice
        //   ),
        //   bestPriceFormated: formatter.format(
        //     product.priceRange.sellingPrice.lowPrice
        //   ),
        // },
        { ...product },
        ...productsV,
      ]

      // Limitar a un máximo de 20 elementos
      if (newProducts.length > 9) {
        newProducts.pop() // Eliminar el elemento más antiguo
      }

      setProductsV(newProducts)
    }
  }, [product /*,
    -productsV, setProductsV*/])

  return <></>
}

export default ViewRead
