import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import ModalWhiteLabel from '../ModalWhiteLabel/ModalWhiteLable'

// Rutas de las imágenes
const ICON_SELECTED =
  '/assets/vtex.file-manager-graphql/images/39c40f8c-3395-4151-ac3d-2fcc280451c1___0727c3c25fd7dd81339e7582e6a092ab.svg'
const ICON_DEFAULT =
  '/assets/vtex.file-manager-graphql/images/84b87117-c5a4-430e-95a7-3d6f2edcfc90___4ab1c2c4f9821663ba10ce58d70cd904.svg'

function TextGeo() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [distrito] = useLocalStorage('localDistrito', '')
  const [provincia] = useLocalStorage('localProvincia', '')
  const [icon, setIcon] = useState(ICON_DEFAULT)
  const iconStyle = { height: '25px', width: '25px' }
  const onClose = () => {
    setShowModal(false)
  }
  useEffect(() => {
    if (distrito != '') {
      setIcon(ICON_SELECTED)
    }
  }, [distrito])
  return (
    <>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '8px',
          cursor: 'pointer',
        }}
        onClick={() => setShowModal(true)}
      >
        {distrito != '' ? (
          <>
            <img style={iconStyle} src={icon} alt="Ubicación seleccionada" />
            <span
              style={{
                fontSize: '15px',
              }}
            >
              {provincia}, {distrito}
            </span>
          </>
        ) : (
          <>
            <img
              style={iconStyle}
              src={icon}
              alt="Sin ubicación seleccionada"
            />
            <span
              style={{
                fontSize: '15px',
              }}
            >
              Selecciona tu ubicación
            </span>
          </>
        )}
      </div>
      {showModal && (
        <ModalWhiteLabel
          setShowModal={setShowModal}
          show={showModal}
          onClose={onClose}
        />
      )}
    </>
  )
}

export default TextGeo
