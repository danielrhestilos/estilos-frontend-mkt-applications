import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import ModalWhiteLabel from '../ModalWhiteLabel/ModalWhiteLable'
import useResize from '../../hooks/sizeScreenHook'
// Rutas de las imágenes
const ICON_SELECTED =
  'https://estilospe.vtexassets.com/arquivos/Location-cliente-ICON-V1224-red-30.svg'
const ICON_DEFAULT =
  'https://estilospe.vtexassets.com/arquivos/Location-cliente-ICON-V1224-grey-30.svg'

function TextGeoMobile() {
  const [, isMobil] = useResize()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [distrito] = useLocalStorage('localDistrito', '')
  const [provincia] = useLocalStorage('localProvincia', '')
  const [icon, setIcon] = useState(ICON_DEFAULT)
  const iconStyle = { height: '38px', width: '38px' }
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
      {isMobil && (
        <>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              cursor: 'pointer',
            }}
            onClick={() => setShowModal(true)}
          >
            {distrito != '' ? (
              <>
                <div
                  style={{
                    position: 'relative',
                    zIndex: '999',
                    background: '#fff',
                  }}
                >
                  <img
                    style={iconStyle}
                    src={icon}
                    alt="Ubicación seleccionada"
                  />
                </div>
                <div
                  style={{
                    fontFamily: 'Outfit',
                    fontSize: '1.05rem',
                    width: '100%',
                    padding: '0.4rem 1rem',
                    border: '1px solid #d2d2d2',
                    borderRadius: '0.9rem',
                    marginLeft: '-5px',
                  }}
                >
                  {provincia}, {distrito}
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    position: 'relative',
                    zIndex: '999',
                    background: '#fff',
                  }}
                >
                  <img
                    style={iconStyle}
                    src={icon}
                    alt="Sin ubicación seleccionada"
                  />
                </div>
                <div
                  style={{
                    fontFamily: 'Outfit',
                    fontSize: '1.05rem',
                    width: '100%',
                    padding: '0.4rem 1rem',
                    border: '1px solid #d2d2d2',
                    borderRadius: '0.9rem',
                    marginLeft: '-5px',
                  }}
                >
                  Selecciona tu ubicación
                </div>
              </>
            )}
          </div>
          <>
            {showModal && (
              <ModalWhiteLabel
                setShowModal={setShowModal}
                show={showModal}
                onClose={onClose}
              />
            )}
          </>
        </>
      )}
    </>
  )
}

export default TextGeoMobile
