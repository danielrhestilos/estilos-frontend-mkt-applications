import React from 'react'
import styles from './styles.css'
import StickyWrapper from '../StickyWrapper/StickyWrapper'
import Anchor from '../Anchor/Anchor'
import useResize from '../../hooks/sizeScreenHook'

function Layout({
  typeLayout,
  titlLayout,
  colorTitlLayout,
  fontSizeTitlLayout,
  fontFamilyTitlLayout,
  fontWeightTitlLayout,
  children,
  idLayout,
  menu,
}: any) {
  const [, isMobil] = useResize()
  const getClassName = (typeLayout: string) => {
    switch (typeLayout) {
      case 'video':
        return styles.Solo
      case 'main':
        return styles.layoutMain
      case 'header-footer':
        return styles.layoutHeader
      case 'solo':
        return styles.layoutSolo
      case 'duo':
        return styles.layoutDuo
      case 'triple':
        return styles.layoutTriple
      case 'collage1':
        return styles.layoutCollage
      case 'collage2':
        return styles.layoutCollage2
      case 'collage-pro':
        return styles.layoutCollagePro
      case 'collage-max':
        return styles.layoutCollageMax
      default:
        return ''
    }
  }
  return (
    <section id={idLayout}>
      {titlLayout != '' && (
        <div
          style={{
            marginBottom: '2.3rem',
            marginTop: '2rem',
            marginRight: 'auto',
            marginLeft: 'auto',
            color: colorTitlLayout,
            fontSize: fontSizeTitlLayout,
            fontFamily: fontFamilyTitlLayout,
            textAlign: 'center',
            fontWeight: fontWeightTitlLayout,
          }}
          dangerouslySetInnerHTML={{ __html: titlLayout }}
        />
      )}
      <div className={getClassName(typeLayout)}>{children}</div>
      {menu?.show && typeLayout == 'main' && (
        <StickyWrapper threshold={1}>
          <div className={styles.menuContainer}>
            <ul>
              {menu?.elementos?.map((child: any) => (
                <>
                  <Anchor targetId={child.targetId} offset={83}>
                    <li>{child?.label}</li>
                    {isMobil && (
                      <div
                        style={{
                          borderTop: '0.0625rem solid rgb(219, 219, 219)',
                          borderLeft: 'none',
                          borderRight: 'none',
                          background: 'rgb(250, 250, 250)',
                          height: '0.5rem',
                          width: '100%',
                        }}
                      ></div>
                    )}
                  </Anchor>
                </>
              ))}
            </ul>
            {isMobil && (
              <>
                {/* <div
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '0',
                    height: '100%',
                    width: '2.5rem',
                    right: 'auto',
                    backgroundImage:
                      'linear-gradient(270deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 60%)',
                    borderRadius: '0.188rem',
                  }}
                ></div> */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0px',
                    height: '100%',
                    left: 'auto',
                    width: '2.5rem',
                    borderRadius: '0.188rem',
                    backgroundImage:
                      'linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255 255 255 / 83%) 60%)',
                  }}
                ></div>
              </>
            )}
          </div>
        </StickyWrapper>
      )}
    </section>
  )
}

export default Layout
