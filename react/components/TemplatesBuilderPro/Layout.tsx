import React from "react";
import styles from './styles.css'


function Layout({typeLayout,titlLayout,children}:any) {

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
        <div>
            {titlLayout != '' && <h3 className={styles.titleLayout}>{titlLayout}</h3>}
            <div className={getClassName(typeLayout)}>
                {children}
            </div>
        </div>
    );
}

export default Layout;