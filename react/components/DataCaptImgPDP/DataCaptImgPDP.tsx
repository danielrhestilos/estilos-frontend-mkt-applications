import React from 'react'
import { ProductContext } from 'vtex.product-context'
// Importamos el tipo para hacer el cast
import type { ProductContext as ProductContextType } from 'vtex.product-context'

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

class DataCaptImg extends React.Component {
  static contextType = ProductContext
  // No es estrictamente necesario redeclarar `context!:` si vamos a castear en el método
  context!: React.ContextType<typeof ProductContext>

  componentDidMount() {
    console.log('DataCaptImgPDP')

    console.log('DataCaptImgPDP')
    // Aqui forzamos el tipo correcto
    const productContext = this.context as ProductContextType
    const { selectedItem } = productContext || {}

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'ImageProducto',
      Imagen_producto: `${selectedItem?.images?.[0]?.imageUrl}`,
    })
  }

  render() {
    return null
  }
}

export default DataCaptImg
