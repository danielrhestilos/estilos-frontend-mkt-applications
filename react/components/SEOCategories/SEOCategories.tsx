import React, { useEffect, useState } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import styles from './styles.css'
// import { match } from 'assert'

function SEOCategories(props: any) {
  const [text, setText] = useState('')
  const { route } = useRuntime()
  const canonicalPath = route?.canonicalPath
  const params = route?.params
  const terms = params?.terms
  const containerPLP = props?.containerPLP

  useEffect(() => {
    if (!canonicalPath) {
      console.error('Canonical Path is undefined')
      return
    }
    const path = terms ? `${canonicalPath}/${terms}` : canonicalPath
    // console.log('items container plp', containerPLP)

    // console.log('path: ', path)

    const matchedItem = containerPLP.find((item: any) => item.route === path)
    // console.log('matchedItem: ', matchedItem)

    if (matchedItem) {
      setText(matchedItem.htmlText || '') // Set the text or an empty string if htmlText is undefined
    }
  }, [canonicalPath])

  return (
    text != '' && (
      <div
        className={styles.seoContent}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  )
}

SEOCategories.defaultProps = {
  containerPLP: [
    {
      route: '/textil/damas',
      htmlText:
        '<h1>Calzado para Hombre</h1><p>Encuentra los mejores zapatos para hombre aquí.</p>',
    },
  ],
}

SEOCategories.schema = {
  title: 'Cargue contenido para el PLP',
  description:
    'Puedes alterar el orden de este componente, asegurate de tener cargado la ruta correspondiente',
  type: 'object',
  properties: {
    containerPLP: {
      title: 'Contenedor de validación rutas y contenido SEO',
      type: 'array',
      items: {
        title: 'Item ',
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Asigna nombre al item para fácil acceso',
            description:
              'Asignar nombre al item. Solo visible en el site-editor',
            type: 'string',
          },
          route: {
            title: 'Ruta de la pagina PLP (marca o categoria)',
            description: 'Ruta de la pagina PLP ',
            type: 'string',
          },
          htmlText: {
            title: 'Contenido HTML para el PLP (para la marca o categoria)',
            description: 'Contenido HTML ',
            type: 'string',
          },
        },
      },
    },
  },
}

export default SEOCategories
