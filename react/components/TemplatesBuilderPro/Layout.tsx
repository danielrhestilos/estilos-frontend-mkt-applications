import React from "react";
import styles from './styles.css'


function Layout({typeLayout,children}:any) {

    const getClassName = (typeLayout:string) => {
        switch (typeLayout) {
            case 'solo':
                return styles.layoutSolo;
            case 'duo':
                return styles.layoutDuo;
            case 'triple':
                return styles.layoutTriple;
            case 'collage1':
                return styles.layoutCollage;
            case 'collage2':
                return styles.layoutCollage2;
            case 'collage-pro':
                return styles.layoutCollagePro;
            default:
                return '';
        }
    };
    

    return (  
        <div className={getClassName(typeLayout)}>
            {children}
        </div>
    );
}

export default Layout;