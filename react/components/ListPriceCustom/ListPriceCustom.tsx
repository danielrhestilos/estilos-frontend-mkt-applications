import React from 'react'
import styles from './styles.css'
import { useProductInfo } from '../../hooks/productInfoHook'
import { useListPrice } from '../../hooks/listPriceHook'

function ListPrice({ container /*isProduct*/ }: any) {
  const { selectedItem, product } = useProductInfo()
  const productId = product?.productId
  // console.log('productId ',productId);

  const { price, isVoid } = useListPrice(selectedItem, productId, container)
  console.log('price ', price)

  if (!price || isVoid) {
    console.log('voy a retornar null')

    return null
  }

  const formattedPrice = price.toLocaleString('es-PE', {
    style: 'currency',
    currency: 'PEN',
  })
  console.log('formattedPrice ', formattedPrice)

  return (
    <div className={styles.listPrice}>
      {/* {isProduct && <del className={styles.normalText}>Normal</del>} */}
      <del>{formattedPrice}</del>
    </div>
  )
}

ListPrice.defaultProps = {
  isProduct: false,
  container: [
    {
      productId: 191,
      fakePrice: 19100,
    },
    {
      productId: 190,
      fakePrice: 19000,
    },
  ],
}

ListPrice.schema = {
  title: 'Agregue precios blancos artificiales',
  description: 'Puedes alterar el orden de este componente',
  type: 'object',
  properties: {
    isProduct: {
      type: 'boolean',
      title: '¿Es PDP?',
      default: true,
    },
    container: {
      title: 'Contenedor de validación rutas y contenido SEO',
      type: 'array',
      items: {
        title: 'Item ',
        type: 'object',
        properties: {
          productId: {
            title: 'productId',
            description: 'productId',
            type: 'string',
          },
          fakePrice: {
            title: 'fakePrice',
            description: 'fakePrice',
            type: 'string',
          },
        },
      },
    },
  },
}

export default ListPrice
