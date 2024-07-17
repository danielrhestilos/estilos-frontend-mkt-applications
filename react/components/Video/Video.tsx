import React, { useState, useEffect } from 'react'
import useResize from '../../hooks/sizeScreenHook'
import styles from './styles.css'

function Video() {
  const [, isMobil] = useResize()
  const [shouldShow, setShouldShow] = useState(false)

  useEffect((): void | any => {
    const targetDate: any = new Date('2024-07-21T23:59:59') // fecha y hora objetivo
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
    !shouldShow && (
      <section
        id={`${isMobil ? 'estilos-video-movil' : 'video-estilos-desktop'}`}
        style={{ textAlign: 'center' }}
        className={styles.videoEstilos}
        onClick={() => {
          window.open(
            '/protuner-descuentos-exclusivos-en-estiloscompe',
            '__blank'
          )
        }}
      >
        <h5 style={{ fontSize: '1.73rem', textAlign: 'center' }}>
          Protuner: marca exclusiva en Estilos
        </h5>
        {!isMobil ? (
          <video
            width={'1018px'}
            style={{ margin: 'auto', maxWidth: '100%' }}
            autoPlay
            muted
            loop
            src="https://e-commerce.estilos.com.pe/videosmkp/horizonal-protuner-promo-mp4.mp4"
          />
        ) : (
          <video
            style={{ margin: 'auto', maxWidth: '100%' }}
            autoPlay
            muted
            loop
            src="https://e-commerce.estilos.com.pe/videosmkp/vertical-protuner-promo-mp4.mp4"
          />
        )}
      </section>
    )
  )
}

export default Video
