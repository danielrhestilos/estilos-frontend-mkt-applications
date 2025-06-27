import React from 'react'
import { useProduct } from 'vtex.product-context'
import { Image } from 'vtex.store-image'
import { useCategoryMatch } from '../../hooks/categoryMatchHook'
import { useProductCategoryIds } from '../../hooks/categoryIdsHook'
import { useFilteredBrands } from '../../hooks/filteredBrandsHook'

interface CustomSizeGuideProps {
  containerSizeGuide: SizeGuideProps[]
}

interface SizeGuideProps {
  brandId: string
  categories: string
}

const CustomSizeGuide = ({ containerSizeGuide }: CustomSizeGuideProps) => {
  const contextPdp = useProduct()
  const productCategoryIds = useProductCategoryIds()

  // Verificar que contextPdp, contextPdp.product y containerSizeGuide estén definidos
  if (!contextPdp || !contextPdp.product || !containerSizeGuide) {
    return null
  }

  const {
    product: { brandId: productBrandId },
  } = contextPdp

  const brandSelected = useFilteredBrands(containerSizeGuide, productBrandId)

  // Verificar que brandSelected no esté vacío y que productCategoryIds esté definido
  if (brandSelected.length === 0 || !productCategoryIds) {
    return null
  }

  const ImageAndBrandMatch = useCategoryMatch(
    brandSelected[0].categories,
    productCategoryIds
  )

  // Verificar que ImageAndBrandMatch no esté vacío
  if (ImageAndBrandMatch.length === 0) {
    return null
  }

  return (
    <a
      href="https://estilospe.vtexassets.com/arquivos/PlantillaPie.pdf"
      target="__blank"
      style={{ margin: 'auto', display: 'block', width: 'fit-content' }}
    >
      <Image
        src={ImageAndBrandMatch[0].imageUrl}
        alt={`brandId__${ImageAndBrandMatch[0].brandId}`}
        width="auto"
      />
    </a>
  )
}

CustomSizeGuide.defaultProps = {
  containerSizeGuide: [],
}

CustomSizeGuide.schema = {
  title: 'Cargue de contenido para guía de tallas',
  description:
    'Puedes alterar el orden de este componente, asegurate de tener cargado el ID correspondiente',
  type: 'object',
  properties: {
    tabIndex: -1,
    containerSizeGuide: {
      title: 'Contenedor de validación de guía de tallas',
      type: 'array',
      items: {
        title: 'item',
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Asigna nombre al item para fácil acceso',
            description:
              'Asignar nombre al item. Solo visible en el site-editor',
            type: 'string',
          },
          brandId: {
            title: 'Id de la marca (Brand)',
            description:
              'Id de la marca para evitar errores. Ejemplo:"0123456"',
            type: 'string',
          },
          categories: {
            title: 'Contenedor de categorias',
            type: 'array',
            items: {
              title: 'item',
              type: 'object',
              properties: {
                __editorItemTitle: {
                  title: 'Asigna nombre a la validación para fácil acceso',
                  description:
                    'Asignar nombre al item. Solo visible en el site-editor',
                  type: 'string',
                },
                categoryList: {
                  title: 'Lista de categorias a validar',
                  description:
                    'si son varias, usar un separador de coma. Ejemplo "01,02".',
                  type: 'array',
                  items: {
                    title: 'Nombre de categoria',
                    type: 'object',
                    properties: {
                      __editorItemTitle: {
                        title: 'Nombre de categoria',
                        description:
                          'Nombre para administración. Solo visible en el site-editor',
                        type: 'string',
                      },
                      categoryId: {
                        title: 'Id de la categoría',
                        description:
                          'Id de la categoria para evitar errores. Ejemplo:"0123456"',
                        type: 'string',
                      },
                    },
                  },
                },
                imageUrl: {
                  title: 'Imagen de Guía de talla',
                  description: 'Imagen debe ser png o jpeg',
                  type: 'string',
                  widget: {
                    'ui:widget': 'image-uploader',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default CustomSizeGuide
