import React from 'react'
import useResize from '../../hooks/sizeScreenHook'

function Video() {
  const [, isMobil] = useResize()
  return (
    <>
      <h5 style={{ fontSize: '1.73rem', textAlign: 'center' }}>
        ¡Descuentos en bicicletas LIMIT!
      </h5>
      <a
        href="/bicicletas-skate/limit/limit?_q=limit&fuzzy=0&initialMap=ft&initialQuery=limit&map=category-3,brand,ft&operator=and"
        target="__blank"
        id="video-component-estilos"
        style={{ display: 'block', margin: 'auto', width: 'fit-content' }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: 'auto',
            textAlign: 'center',
            marginBottom: '22px',
          }}
        >
          {!isMobil ? (
            <video
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
          <button
            style={{
              cursor: 'pointer',
              fontFamily: 'Outfit',
              position: 'relative',
              top: '-100px',
              background: '#e91111',
              color: '#fff',
              borderRadius: '22px',
              fontSize: '1.33rem',
              padding: '.4rem 2rem',
              margin: 'auto',
              textDecoration: 'none',
              border: 'none',
            }}
          >
            ¡QUIERO LAS BICIS!
          </button>
        </div>
      </a>
    </>
  )
}

export default Video
