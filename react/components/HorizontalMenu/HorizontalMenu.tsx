import React, { useEffect, useState } from 'react'
import RenderItem from './components/RenderItem';
import { useCssHandles } from 'vtex.css-handles'


const CSS_HANDLES = [
  'content',
  'rowContent'
]

const HorizontalMenu = (props: { images: any[]; } | undefined) => {

  const [scrollY, setScrollY] = useState(0)

  const handles = useCssHandles(CSS_HANDLES);


  if (props === undefined) {
    return null
  }

  /**
   * The function sets the value of the scroll position on the Y-axis.
   */
  function setScroll() {
    setScrollY(window.pageYOffset)
  }


  /* `useEffect` is a hook in React that allows you to perform side effects in function components. In
  this case, the `useEffect` hook is being used to add an event listener to the `window` object for
  the `scroll` event, and then remove it when the component unmounts. The `setScroll` function is
  called whenever the `scroll` event is triggered, and it updates the `scrollY` state with the
  current Y-axis scroll position. This allows the component to track the user's scroll position and
  use it to render the `RenderItem` component with the appropriate styles. The empty array `[]`
  passed as the second argument to `useEffect` ensures that the effect is only run once, when the
  component mounts. */
  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', setScroll)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', setScroll)
    }
  }, [])


  return (
    <>
      <div className={`w-100 pb4 flex justify-between overflow-x-auto ${handles.rowContent}`}>
        {props.images.map((index: any, key: any) => {
          return (
            <div className={`w-100 ${handles.content}`} key={key} data-js={`id_${index.url}`}>
              <RenderItem scrollY={scrollY} url={index.url} logo={index.logo} nombre={index.nombre} rowcontentStyle={handles.rowContent} />
            </div>
          )
        })}
      </div>
    </>

  )
}

HorizontalMenu.defaultProps = {
  images: []
}

HorizontalMenu.schema = {
  title: 'Cargue de contenido horizontal',
  description: 'Puedes alterar el orden de este componente, pero no se verá reflejado en las vitrinas inferiores',
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
              'ui:widget': 'image-uploader'
            }
          },
          nombre: {
            title: 'Nombre de categoría',
            description: 'Nombre de descripción. Ejemplo:"Categoría"',
            type: 'string'
          },
          url: {
            title: 'Url a redirigir',
            description: 'ejemplo "categoria", si usar "/".',
            type: 'string'
          }
        }
      }
    }
  }
}

export default HorizontalMenu
