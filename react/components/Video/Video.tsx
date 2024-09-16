import React, { useState, useEffect } from 'react'
import useResize from '../../hooks/sizeScreenHook'
import styles from './styles.css'

function Video() {
  const [, isMobil] = useResize()
  const [shouldShow, setShouldShow] = useState(false)

  useEffect((): void | any => {
    const targetDate: any = new Date('2025-07-21T23:59:59') // fecha y hora objetivo
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
        style={{
          textAlign: 'center',
        }}
        className={styles.videoEstilos}
        onClick={() => {
          window.open('https://online.fliphtml5.com/iqrni/cmaj/', '__blank')
        }}
      >
        {/* <h5 style={{ fontSize: '1.73rem', textAlign: 'center' }}>
          Severin: marca exclusiva en Estilos
        </h5> */}
        {!isMobil ? (
          <video
            style={{
              margin: 'auto',
              maxWidth: '100%',
              display: 'block',
              width: '100vw',
            }}
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
            // src="https://e-commerce.estilos.com.pe/videosmkp/horizonal-protuner-promo-mp4.mp4"
            src="https://e-commerce.estilos.com.pe/videosmkp/video_avance.mp4"
          />
        ) : (
          <video
            style={{
              objectFit: 'cover',
              width: '100vw',
              height: '100vh',
              // position: 'fixed',
              // top: 0,
              // left: 0,

              // margin: 'auto',
              // width: '100%',
              // display: 'block',
            }}
            poster="/arquivos/pv-opt-mini-phone.jpg"
            autoPlay
            muted
            preload="metadata"
            loop
            // src="https://e-commerce.estilos.com.pe/videosmkp/horizonal-protuner-promo-mp4.mp4"
          >
            <source src="https://e-commerce.estilos.com.pe/videosmkp/avance-pc-phone.mp4"></source>
          </video>
        )}
      </section>
    )
  )
}

export default Video
