import React from 'react'
import useResize from '../../hooks/sizeScreenHook'

function VideoSummer(props: any) {
  const [, isMobil] = useResize()

  return (
    <section
      style={{ cursor: 'pointer' }}
      id={`${isMobil ? 'estilos-video-movil' : 'video-estilos-desktop'}`}
      onClick={() => {
        window.open('/glam-tropical', '__blank')
      }}
    >
      {props.children}
    </section>
  )
}

export default VideoSummer
