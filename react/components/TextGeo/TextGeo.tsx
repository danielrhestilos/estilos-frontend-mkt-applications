import React from 'react'
import useLocalStorage from '../../hooks/localStorageHook'

// useLocalStorage
function TextGeo() {
  const [distrito] = useLocalStorage('localDistrito', '')
  const [provincia] = useLocalStorage('localProvincia', '')
  return (
    <div>
      {distrito != '' ? (
        <>
          {provincia},{distrito}
        </>
      ) : (
        <>
          Selecciona <br />
          tu ubicación
        </>
      )}
    </div>
  )
}

export default TextGeo
