import React from 'react'
import styles from './styles.css'
import { useRuntime } from 'vtex.render-runtime'

function FakeFilter(props: any) {
  const { route } = useRuntime()
  const canonicalPath = route?.canonicalPath ?? '/'
  const { navigate } = useRuntime()

  // Mapea las imágenes y agrega canonicalPath
  const imagesWithCanonicalPath =
    props.images?.map((image: any) => ({
      ...image,
      canonicalPath,
    })) || []

  console.log('canonicalPath', canonicalPath)
  console.log('route', route)
  console.log('imagesWithCanonicalPath', imagesWithCanonicalPath)

  return (
    <div className={styles.filterFake}>
      <h5 className={styles.filterFakeTitle}>Filtros de Tv</h5>
      <div className={styles.filterContainer}>
        <h6 className={styles.typeFilterFake}>PULGADAS: </h6>
        {imagesWithCanonicalPath.map((image: any, index: any) => (
          <div key={index} className={styles.filterFakeBlock}>
            {/* <p>URL: {image.url}</p> */}
            <p
              className={styles.filterFakeParagraph}
              onClick={() => {
                navigate({
                  to: image.url,
                })
              }}
            >
              {console.log(
                '${canonicalPath}?map=productClusterIds',
                `${canonicalPath}?map=productClusterIds`
              )}
              {console.log('image.url', `${image.url}`)}
              <div className={`${styles.markerFilterFake}`}>
                {// ((canonicalPath == '/electro/electro/video'   ) ||  )
                `${canonicalPath}?map=productClusterIds` == image.url && (
                  <svg
                    style={{
                      position: 'relative',
                      top: '-.5rem',
                    }}
                    className="vtex__icon-check  "
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
