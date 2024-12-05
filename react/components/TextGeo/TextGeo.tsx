import React from 'react'
import useLocalStorage from '../../hooks/localStorageHook'

// Rutas de las imágenes
const ICON_SELECTED =
  '/assets/vtex.file-manager-graphql/images/83c6ee9f-d3ac-4d12-bc36-7e342a8152ae___68daf827e5a300345fe40c826754f822.svg'
const ICON_DEFAULT =
  '/assets/vtex.file-manager-graphql/images/84b87117-c5a4-430e-95a7-3d6f2edcfc90___4ab1c2c4f9821663ba10ce58d70cd904.svg'

function TextGeo() {
  const [distrito] = useLocalStorage('localDistrito', '')
  const [provincia] = useLocalStorage('localProvincia', '')

  const iconStyle = { height: '32px', width: '32px' }

  return (
    <div>
      {distrito != '' ? (
        <>
          <img
            style={iconStyle}
            src={ICON_SELECTED}
            alt="Ubicación seleccionada"
          />
          {provincia}, {distrito}
        </>
      ) : (
        <>
          <img
            style={iconStyle}
            src={ICON_DEFAULT}
            alt="Sin ubicación seleccionada"
          />
          Selecciona tu ubicación
        </>
      )}
    </div>
  )
}

export default TextGeo
