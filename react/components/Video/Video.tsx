import React, { useState, useEffect } from 'react'
import useResize from '../../hooks/sizeScreenHook'
import styles from './styles.css'

function Video() {
  const [, isMobil] = useResize()
  const [shouldShow, setShouldShow] = useState(false)

  useEffect((): void | any => {
    const targetDate: any = new Date('2024-07-08T23:59:59') // fecha y hora objetivo
    const now: any = new Date()
    const timeUntilTarget = targetDate - now
    if (timeUntilTarget > 0) {
      const timer = setTimeout(() => {
        setShouldShow(true)
      }, timeUntilTarget)
      return () => clearTimeout(timer)
    } else {
      setShouldShow(true)
    }
  }, [])

  return (
    shouldShow && (
      <section
        id={`${isMobil ? 'estilos-video-movil' : 'video-estilos-desktop'}`}
        style={{ textAlign: 'center' }}
        className={styles.videoEstilos}
        onClick={() => {
          window.open(
            '/collection/solo-x-horas-severin-estilos-07-2024',
            '__blank'
          )
        }}
      >
        <h5 style={{ fontSize: '1.73rem', textAlign: 'center' }}>
          ¡48 Horas de Precios Exclusivos con Severin!
        </h5>
        {!isMobil ? (
          <video
            width={'1018px'}
            style={{ margin: 'auto', maxWidth: '100%' }}
            autoPlay
            muted
            loop
            src="https://e-commerce.estilos.com.pe/videosmkp/severin_horizontal.mp4"
          />
        ) : (
          <video
            style={{ margin: 'auto', maxWidth: '100%' }}
            autoPlay
            muted
            loop
            src="https://e-commerce.estilos.com.pe/videosmkp/severin_vertical.mp4"
          />
        )}
      </section>
    )
  )
}

export default Video
