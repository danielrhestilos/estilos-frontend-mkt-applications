import React, { useEffect, useState } from "react"
import { useProduct } from 'vtex.product-context'
import { Image } from 'vtex.store-image'
import { Alert } from 'vtex.styleguide'

interface CustomSizeGuideProps {
  containerSizeGuide: SizeGuideProps[]
}

interface SizeGuideProps {
  brandId: string,
  categories: string
}

const CustomSizeGuide = ({ containerSizeGuide }: CustomSizeGuideProps) => {
  const contextPdp = useProduct();
  const [brandSelected, setBrandSelected] = useState<SizeGuideProps[]>([]);
  const [productCategoryIds, setProductCategoryIds] = useState<string[]>([]);

  const {
    product: {
      brandId: productBrandId,
      categoryTree: productCategoryTree
    }
  } = contextPdp

  useEffect(() => {
    const categoryIds = productCategoryTree?.map((category: { id: number }) => category.id.toString()) || []
    setProductCategoryIds(categoryIds)

    const filteredBrands = containerSizeGuide.filter(({ brandId }: SizeGuideProps) => {
      return productBrandId.toString() === brandId
    })

    setBrandSelected(filteredBrands);
  }, [containerSizeGuide, productBrandId, productCategoryTree]);

  // Return null if there is no match or containerSizeGuide is undefined
  if (containerSizeGuide === undefined || brandSelected.length === 0) {
    return null
  }

  /**
   * The function `validateCategoryMatch` takes in an array of selected categories and a brand ID, and
   * returns an array of objects containing the image URL and brand ID for categories that match the
   * product category IDs.
   * @param {any} categoriesSelected - An array of objects representing the selected categories. Each
   * object has two properties: "categoryList" and "imageUrl".
   * @param {any} brandId - The `brandId` parameter is the ID of a brand.
   * @returns The function `validateCategoryMatch` returns an array of objects that have the properties
   * `imageUrl` and `brandId`.
   */
  const validateCategoryMatch = (categoriesSelected: any, brandId: any) => {
    const categorySet = new Set(productCategoryIds)
    const coincidencias: any[] = [];

    categoriesSelected.forEach(({ categoryList, imageUrl }: any) => {
      categoryList?.forEach(({ categoryId }: any) => {
        if (categorySet?.has(categoryId)) {
          coincidencias.push({ imageUrl, brandId })
        }
      });
    });

    return coincidencias
  }

  const ImageAndBrandMatch = validateCategoryMatch(brandSelected[0].categories, brandSelected[0].brandId)

  return (
    <>
      {ImageAndBrandMatch[0] === undefined ? (
        <Alert type="error" onClose={() => console.log('Closed!')}>
          No disponible para este producto.
        </Alert>
      )
        : (
          <Image
            src={ImageAndBrandMatch[0].imageUrl}
            alt={`brandId__${ImageAndBrandMatch[0].brandId}`}
            width={'100%'}
            height={'100%'}
            className='w-100'
          />
        )}
    </>
  );
};


CustomSizeGuide.defaultProps = {
  containerSizeGuide: []
}

CustomSizeGuide.schema = {
  title: 'Cargue de contenido para guía de tallas',
  description: 'Puedes alterar el orden de este componente, asegurate de tener cargado el ID correspondiente',
  type: 'object',
  properties: {
    containerSizeGuide: {
      title: 'Contenedor de validación de guía de tallas',
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
          brandId: {
            title: 'Id de la marca (Brand)',
            description: 'Id de la marca para evitar errores. Ejemplo:"0123456"',
            type: 'string'
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
                  description: 'Asignar nombre al item. Solo visible en el site-editor',
                  type: 'string'
                },
                categoryList: {
                  title: 'Lista de categorias a validar',
                  description: 'si son varias, usar un separador de coma. Ejemplo "01,02".',
                  type: 'array',
                  items: {
                    title: 'Nombre de categoria',
                    type: 'object',
                    properties: {
                      __editorItemTitle: {
                        title: 'Nombre de categoria',
                        description: 'Nombre para administración. Solo visible en el site-editor',
                        type: 'string',
                      },
                      categoryId: {
                        title: 'Id de la categoría',
                        description: 'Id de la categoria para evitar errores. Ejemplo:"0123456"',
                        type: 'string'
                      },
                    }
                  }
                },
                imageUrl: {
                  title: 'Imagen de Guía de talla',
                  description: 'Imagen debe ser png o jpeg',
                  type: 'string',
                  widget: {
                    'ui:widget': 'image-uploader'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export default CustomSizeGuide
