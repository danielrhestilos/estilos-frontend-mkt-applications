import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import ModalWhiteLabel from '../ModalWhiteLabel/ModalWhiteLable'
import useResize from '../../hooks/sizeScreenHook'

// Rutas de las imágenes
const ICON_SELECTED_DESKTOP =
  '/assets/vtex.file-manager-graphql/images/39c40f8c-3395-4151-ac3d-2fcc280451c1___0727c3c25fd7dd81339e7582e6a092ab.svg'
const ICON_DEFAULT_DESKTOP =
  '/assets/vtex.file-manager-graphql/images/84b87117-c5a4-430e-95a7-3d6f2edcfc90___4ab1c2c4f9821663ba10ce58d70cd904.svg'
const ICON_SELECTED_MOBILE =
  'https://estilospe.vtexassets.com/arquivos/Location-cliente-ICON-V1224-red-30.svg'
const ICON_DEFAULT_MOBILE =
  'https://estilospe.vtexassets.com/arquivos/Location-cliente-ICON-V1224-grey-30.svg'

// Interfaz para las props
interface TextGeoUnifiedProps {
  onlyMobile?: boolean // Si es true, se renderiza solo en móvil
}

const TextGeoUnified: React.FC<TextGeoUnifiedProps> = ({ onlyMobile }) => {
  const [, isMobile] = useResize() // Detecta si es móvil o no
  const [showModal, setShowModal] = useState<boolean>(false)
  const [distrito] = useLocalStorage('localDistrito', '')
  const [provincia] = useLocalStorage('localProvincia', '')
  const [icon, setIcon] = useState(
    isMobile ? ICON_DEFAULT_MOBILE : ICON_DEFAULT_DESKTOP
  )

  const iconStyle = isMobile
    ? { height: '38px', width: '38px' }
    : { height: '25px', width: '25px' }

  const onClose = () => setShowModal(false)
  // useEffect(() => {
  //   if (distrito == '') {
  //     setShowModal(true)
  //   }
  // }, [])
  useEffect(() => {
    if (distrito !== '') {
      setIcon(isMobile ? ICON_SELECTED_MOBILE : ICON_SELECTED_DESKTOP)
    }
  }, [distrito, isMobile])

  // Si onlyMobile es true y no es un dispositivo móvil, no renderiza nada
  if (onlyMobile && !isMobile) {
    return null
  }

  return (
    <>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: isMobile ? '0' : '8px',
          cursor: 'pointer',
        }}
        onClick={() => setShowModal(true)}
      >
        {distrito !== '' ? (
          <>
            <div
              style={
                isMobile
                  ? { position: 'relative', zIndex: '999', background: '#fff' }
                  : {}
              }
            >
              <img style={iconStyle} src={icon} alt="Ubicación seleccionada" />
            </div>
            <div
              style={
                isMobile
                  ? {
                      fontFamily: 'Outfit',
                      fontSize: '1.05rem',
                      width: '100%',
                      padding: '0.4rem 1rem',
                      border: '1px solid #d2d2d2',
                      borderRadius: '0.9rem',
                      marginLeft: '-5px',
                    }
                  : { fontSize: '15px' }
              }
            >
              {provincia}, {distrito}
            </div>
          </>
        ) : (
          <>
            <div
              style={
                isMobile
                  ? { position: 'relative', zIndex: '999', background: '#fff' }
                  : {}
              }
            >
              <img
                style={iconStyle}
                src={icon}
                alt="Sin ubicación seleccionada"
              />
            </div>
            <div
              style={
                isMobile
                  ? {
                      fontFamily: 'Outfit',
                      fontSize: '1.05rem',
                      width: '100%',
                      padding: '0.4rem 1rem',
                      border: '1px solid #d2d2d2',
                      borderRadius: '0.9rem',
                      marginLeft: '-5px',
                    }
                  : { fontSize: '15px' }
              }
            >
              Selecciona tu ubicación
            </div>
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

export default TextGeoUnified
