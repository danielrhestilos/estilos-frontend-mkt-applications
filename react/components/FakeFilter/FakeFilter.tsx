import React from 'react'
import styles from './styles.css'
import { useRuntime } from 'vtex.render-runtime'

function FakeFilter(props: any) {
  const { route } = useRuntime()
  const { navigate } = useRuntime()

  const shouldDisplayFilter = props?.images?.some((image: any) =>
    route.path.includes(image.url)
  )
  // console.log(props.images)
  // console.log('route.path', route.path)

  if (!shouldDisplayFilter) {
    return null
  }

  return (
    <div className={styles.filterFake}>
      <h5 className={styles.filterFakeTitle}>Filtros de Tv</h5>
      <div className={styles.filterContainer}>
        <h6 className={styles.typeFilterFake}>PULGADAS: </h6>
        {props?.images?.map((image: any, index: any) => (
          <div key={index} className={styles.filterFakeBlock}>
            <p
              className={styles.filterFakeParagraph}
              onClick={() => {
                navigate({
                  to: image.url,
                })
              }}
            >
              <div className={`${styles.markerFilterFake}`}>
                {route.path === image.url && (
                  <svg
                    style={{
                      position: 'relative',
                      top: '-.5rem',
                    }}
                    className="vtex__icon-check"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                  >
                    <path
                      d="M10.8 4.4L9.4 3L5.4 7L3.4 5L2 6.4L5.4 9.8L10.8 4.4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </div>
              <span>{image.text}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

FakeFilter.schema = {
  title: 'Cargue de contenido horizontal',
  description:
    'Puedes alterar el orden de este componente, pero no se verá reflejado en las vitrinas inferiores',
  type: 'object',
  properties: {
    images: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: {
            title: 'Url',
            description: '',
            type: 'string',
          },
          text: {
            title: 'Text',
            description: '',
            type: 'string',
          },
        },
      },
    },
  },
}

export default FakeFilter
