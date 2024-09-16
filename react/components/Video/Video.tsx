import React from 'react'
import useResize from '../../hooks/sizeScreenHook'

function Video(props: any) {
  const [, isMobil] = useResize()

  return (
    <section
      style={{ cursor: 'pointer' }}
      id={`${isMobil ? 'estilos-video-movil' : 'video-estilos-desktop'}`}
      onClick={() => {
        window.open('https://online.fliphtml5.com/iqrni/cmaj/', '__blank')
      }}
    >
      {props.children}
    </section>
  )
}

export default Video
