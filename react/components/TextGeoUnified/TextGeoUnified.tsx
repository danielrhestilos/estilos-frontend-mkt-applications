import React, { useEffect, useState, useMemo } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import ModalWhiteLabel from '../ModalWhiteLabel/ModalWhiteLable'
import useResize from '../../hooks/sizeScreenHook'
import styles from './TextGeoUnified.module.css'

const ICONS = {
  selected: {
    desktop: '/arquivos/ubi-black.svg',
    mobile: 'https://estilospe.vtexassets.com/arquivos/Location-cliente-ICON-V1224-red-30.svg',
  },
  default: {
    desktop: '/arquivos/ubi-black.svg',
    mobile: 'https://estilospe.vtexassets.com/arquivos/Location-cliente-ICON-V1224-grey-30.svg',
  },
}

interface Props {
  onlyMobile?: boolean
}

const TextGeoUnified: React.FC<Props> = ({ onlyMobile }) => {
  const [, isMobile] = useResize()
  const [showModal, setShowModal] = useState(false)
  const [hidePromo, setHidePromo] = useState(false)
  const [distrito] = useLocalStorage('localDistrito', '')
  const [provincia] = useLocalStorage('localProvincia', '')

  const icon = distrito
    ? isMobile ? ICONS.selected.mobile : ICONS.selected.desktop
    : isMobile ? ICONS.default.mobile : ICONS.default.desktop

  const iconStyle = useMemo(() => ({
    height: isMobile ? '38px' : '25px',
    width: isMobile ? '38px' : '25px',
  }), [isMobile])

  useEffect(() => {
    if (!isMobile) return

    const onScroll = () => setHidePromo(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile]) // dependencias actualizadas

  if (onlyMobile && !isMobile) return null

  return (
    <>
      <div
        id="textGeoWhiteLabel"
        className={`${styles.textGeoWrapper} ${isMobile && hidePromo ? styles.hide : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0' : '4px',
          cursor: 'pointer',
        }}
        onClick={() => setShowModal(true)}
      >
        <div style={isMobile ? { position: 'relative', zIndex: 999, background: '#fff' } : {}}>
          <img style={iconStyle} src={icon} alt={distrito ? 'Ubicación seleccionada' : 'Sin ubicación'} />
        </div>
        <div
          style={{
            fontFamily: 'Outfit Light',
            fontWeight: '300',
            fontSize: isMobile ? '1.05rem' : '17px',
            color: isMobile ? undefined : '#5a5a5a',
            lineHeight: isMobile ? undefined : '1.43rem',
            width: isMobile ? '100%' : undefined,
            padding: isMobile ? '0.4rem 1rem' : undefined,
            border: isMobile && distrito ? '1px solid #d2d2d2' : undefined,
            borderRadius: isMobile ? '0.9rem' : undefined,
            marginLeft: isMobile ? '-5px' : undefined,
            minWidth: !isMobile ? '100px' : undefined,
          }}
        >
          {distrito ? `${provincia}, ${distrito}` : 'Selecciona tu ubicación'}
        </div>
      </div>

      {showModal && (
        <ModalWhiteLabel
          show={showModal}
          setShowModal={setShowModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default TextGeoUnified