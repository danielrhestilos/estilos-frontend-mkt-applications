import React from "react"
import { useProduct } from 'vtex.product-context'

export interface InfoStockProps {
  categoryList: categoryListProps[]
  Then: any
  Else: any
}

interface categoryListProps {
  categoryId: string
}

const ConditionCategoryShow = ({ categoryList, Then, Else }: InfoStockProps) => {
  const { product: {
    categories: productCategoryTree
  } } = useProduct()

  var foundCategories = [];

  categoryList.forEach((category) => {
    const categoryId = category.categoryId
    productCategoryTree.forEach((datoItem: any) => {
      if (datoItem.includes(categoryId)) {
        foundCategories.push(categoryId)
      }
    })
  })

  return foundCategories.length > 0 ? (
    <Then />
  ) : (
    <Else />
  )
}

ConditionCategoryShow.defaultProps = {
  categoryList: []
}

ConditionCategoryShow.schema = {
  title: "Cargue custom conditional showBlock",
  description: 'Colocar el título en mayúscula de las categorías como está en BackOffice ejemplo: "LINEA BLANCA" ',
  type: 'object',
  properties: {
    categoryList: {
      title: 'Contenedor de validación para ',
      type: 'array',
      items: {
        title: 'item',
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Asigna nombre al item para fácil acceso',
            description: 'Asignar nombre al item. Solo visible en el site-editor',
            type: 'string'
          },
          categoryId: {
            title: 'Nombre de la categoría (CategoryName)',
            description: 'Nombre de la categoría En mayúscula. Ejemplo:"LINEA BLANCA"',
            type: 'string'
          }
        }
      }
    }
  }
}

export default ConditionCategoryShow
