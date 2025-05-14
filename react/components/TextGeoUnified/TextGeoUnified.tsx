import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import ModalWhiteLabel from '../ModalWhiteLabel/ModalWhiteLable'
import useResize from '../../hooks/sizeScreenHook'
import styles from './TextGeoUnified.module.css'

// Rutas de las imágenes
const ICON_SELECTED_DESKTOP = '/arquivos/ubi-black.svg'
const ICON_DEFAULT_DESKTOP = '/arquivos/ubi-black.svg'
const ICON_SELECTED_MOBILE =
  'https://estilospe.vtexassets.com/arquivos/Location-cliente-ICON-V1224-red-30.svg'
const ICON_DEFAULT_MOBILE =
  'https://estilospe.vtexassets.com/arquivos/Location-cliente-ICON-V1224-grey-30.svg'

interface TextGeoUnifiedProps {
  onlyMobile?: boolean
}

const TextGeoUnified: React.FC<TextGeoUnifiedProps> = ({ onlyMobile }) => {
  const [, isMobile] = useResize()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [distrito] = useLocalStorage('localDistrito', '')
  const [provincia] = useLocalStorage('localProvincia', '')
  const [icon, setIcon] = useState(
    isMobile ? ICON_DEFAULT_MOBILE : ICON_DEFAULT_DESKTOP
  )
  const [hidePromo, setHidePromo] = useState(false)

  const iconStyle = isMobile
    ? { height: '38px', width: '38px' }
    : { height: '25px', width: '25px' }

  const onClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setHidePromo(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (distrito !== '') {
      setIcon(isMobile ? ICON_SELECTED_MOBILE : ICON_SELECTED_DESKTOP)
    }
  }, [distrito, isMobile])

  if (onlyMobile && !isMobile) {
    return null
  }

  return (
    <>
      <div
        id="textGeoWhiteLabel"
        className={`${styles.textGeoWrapper} ${hidePromo ? styles.hide : ''}`}
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: isMobile ? '0' : '4px',
          cursor: 'pointer',
        }}
        onClick={() => setShowModal(true)}
      >
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
            alt={distrito !== '' ? 'Ubicación seleccionada' : 'Sin ubicación seleccionada'}
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
                  border: distrito !== '' ? '1px solid #d2d2d2' : 'none',
                  borderRadius: '0.9rem',
                  marginLeft: '-5px',
                  fontWeight: '300',
                }
              : {
                  fontSize: '17px',
                  fontWeight: '300',
                  fontFamily: 'Outfit',
                  color: '#5a5a5a',
                  minWidth: '100px',
                  lineHeight: '1.43rem',
                }
          }
        >
          {distrito !== '' ? `${provincia}, ${distrito}` : 'Selecciona tu ubicación'}
        </div>
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