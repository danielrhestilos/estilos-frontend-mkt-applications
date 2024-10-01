import React from 'react'
import useResize from '../../hooks/sizeScreenHook'

function VideoDenim(props: any) {
  const [, isMobil] = useResize()

  return (
    <section
      style={{ cursor: 'pointer' }}
      id={`${isMobil ? 'estilos-video-movil' : 'video-estilos-desktop'}`}
      onClick={() => {
        window.open('https://online.fliphtml5.com/iqrni/nthm/#p=1', '__blank')
      }}
    >
      {props.children}
    </section>
  )
}

export default VideoDenim
