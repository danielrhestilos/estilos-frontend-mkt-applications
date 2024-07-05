import React from 'react'
import useResize from '../../hooks/sizeScreenHook'
import styles from './styles.css'

function Video() {
  const [, isMobil] = useResize()
  return (
    <section
      id={`${isMobil ? 'estilos-video-movil' : 'video-estilos-desktop'}`}
      style={{ textAlign: 'center' }}
      className={styles.videoEstilos}
      onClick={() => {
        window.open(
          '/bicicletas-skate/limit/limit?_q=limit&fuzzy=0&initialMap=ft&initialQuery=limit&map=category-3,brand,ft&operator=and',
          '__blank'
        )
      }}
    >
      <h5 style={{ fontSize: '1.73rem', textAlign: 'center' }}>
        ¡Descuentos en bicicletas LIMIT!
      </h5>
      {!isMobil ? (
        <video
          width={'1018px'}
          style={{ margin: 'auto', maxWidth: '100%' }}
          autoPlay
          muted
          loop
          src="https://e-commerce.estilos.com.pe/videosmkp/limit_horizontal_2.mp4"
        />
      ) : (
        <video
          style={{ margin: 'auto', maxWidth: '100%' }}
          autoPlay
          muted
          loop
          src="https://e-commerce.estilos.com.pe/videosmkp/limit_vertical_2.mp4"
        />
      )}
    </section>
  )
}

export default Video
