import React, { useState, useEffect } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import ReusableSlider from '../ReusableSlider/ReusableSlider'

function VisitedProducts() {
  const [products] = useLocalStorage('productsV', [])
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    // Función asíncrona para obtener los productos con precios formateados
    const fetchProductData = async () => {
      const fetchedData = await Promise.all(
        products.map(async (item: any) => {
          const response = await fetch(
            `/api/catalog_system/pub/products/variations/${item.productId}`
          )
          const res = await response.json()
          console.log('res: ', res)
          const sku = res.skus.find((item: any) => item.available == true)
          return {
            ...item,
            listPriceFormated: sku.listPriceFormated,
            bestPriceFormated: sku.bestPriceFormated,
          }
        })
      )
      setData(fetchedData)
    }

    // Ejecuta la función si hay productos en localStorage
    if (products.length > 0) {
      fetchProductData()
    }
  }, [products])

  return <ReusableSlider title={'👀 Tus últimos vistos'} data={data} />
}

export default VisitedProducts
