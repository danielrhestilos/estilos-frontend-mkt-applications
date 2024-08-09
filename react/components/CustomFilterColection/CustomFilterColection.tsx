import React, { useEffect, useState } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import RenderItem from './components/RenderItem'

const CSS_HANDLES = ['content', 'rowContent', 'ourCamp', 'BigRowFilter']

const CustomFilterColection = (
  props:
    | { images: any[]; small: boolean; links: string[]; widthSmall: boolean }
    | undefined
) => {
  const [scrollY, setScrollY] = useState(0)
  const [show, setShow] = useState(false)
  const { route } = useRuntime()
  const canonicalPath = route?.canonicalPath ?? '/'
  const handles = useCssHandles(CSS_HANDLES)

  if (props === undefined) {
    return null
  }
  function setScroll() {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    // console.log('Hola')
    // console.log('links ', props.links)
    // console.log(
    //   'props.links.includes(canonicalPath)',
    //   props.links.includes(canonicalPath)
    // )

    if (props.small) {
      setShow(true)
    } else {
      if (props.links.length > 0 && props.links.includes(canonicalPath)) {
        setShow(true)
      }
    }
    function watchScroll() {
      window.addEventListener('scroll', setScroll)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', setScroll)
    }
  }, [])

  return (
    show && (
      <div
        className={`w-100 pb4 flex ${
          !props.small && handles.BigRowFilter
        } justify-between overflow-x-auto ${handles.rowContent}`}
        style={props.widthSmall ? { maxWidth: '1000px' } : {}}
      >
        {props.images.map((index: any, key: any) => {
          return (
            <div
              className={`w-100 ${handles.content}`}
              key={key}
              data-js={`id_${index.url}`}
            >
              <RenderItem
                scrollY={scrollY}
                url={index.url}
                logo={index.logo}
                nombre={index.nombre}
                rowcontentStyle={handles.rowContent}
                small={props?.small}
              />
            </div>
          )
        })}
      </div>
    )
  )
}

CustomFilterColection.defaultProps = {
  images: [],
  small: true,
  widthSmall: false,
  links: [],
}

CustomFilterColection.schema = {
  title: 'Cargue de contenido horizontal',
  description:
    'Puedes alterar el orden de este componente, pero no se verá reflejado en las vitrinas inferiores',
  type: 'object',
  properties: {
    images: {
      type: 'array',
      maxItems: 8,
      items: {
        type: 'object',
        properties: {
          logo: {
            title: 'Inserte logo SVG',
            description: 'Tamaño de la imagen debe ser de 32 x 32',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          nombre: {
            title: 'Nombre de categoría',
            description: 'Nombre de descripción. Ejemplo:"Categoría"',
            type: 'string',
          },
          url: {
            title: 'Url a redirigir',
            description: 'ejemplo "categoria", si usar "/".',
            type: 'string',
          },
        },
      },
    },
    links: {
      type: 'array',
      maxItems: 8,
      items: {
        type: 'string',
      },
    },
    small: {
      type: 'boolean',
    },
    widthSmall: {
      type: 'boolean',
    },
  },
}

export default CustomFilterColection
