import React from 'react'
import styles from './styles.css'
import Anchor from '../Anchor/Anchor'

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
  const getClassName = (typeLayout: string) => {
    switch (typeLayout) {
      case 'video':
        return styles.Solo
      case 'main':
        return styles.layoutMain
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
            marginTop: '0px',
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
        <div className={styles.menuContainer}>
          {menu?.elementos?.map((child: any) => (
            <Anchor targetId={child.targetId}>
              <li>{child?.label}</li>
            </Anchor>
          ))}
        </div>
      )}
    </section>
  )
}

export default Layout
