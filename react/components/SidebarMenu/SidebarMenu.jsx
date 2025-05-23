import { useState } from 'react';
import styles from './styles.module.css';

import menuData from './menuData.js';
const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <>
            <button
                className={`${styles.burger} ${isOpen ? styles.open : ''}`}
                onClick={toggleMenu}
            >
                <span className={styles.burgerIcon}></span>
                <span>Menú</span>
            </button>
            {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.menuContainer}>
                    <ul className={styles.leftPanel}>
                        <li
                            key={"hola"}
                            className={`${styles.categoryItem} ${styles.menuTitle}`}
                        >
                            <span>¡Hola!</span>
                            <button onClick={toggleMenu} className={styles.closeButton}>
                                <span className={styles.closeBar1}></span>
                                <span className={styles.closeBar2}></span>
                            </button>
                        </li>
                        {menuData.map((item) => (
                            <li
                                key={item.label}
                                className={`${styles.categoryItem} ${activeCategory === item.label ? styles.active : ''}`}
                                onMouseEnter={() => setActiveCategory(item.label)}
                                onClick={() => setActiveCategory(item.label)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                    <div
                        className={`${styles.rightPanel} ${activeCategory ? styles.visible : ''}`}
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        {menuData
                            .filter((item) => item.label === activeCategory)
                            .map((item) => (
                                <>
                                    <p className={styles.subCategoryTitle}>
                                        <div className={styles.categoryIcon}>
                                            <img rel="preload" as="image" src={`/arquivos/${item.id}.svg`} loading="lazy" />
                                        </div>
                                        <div>
                                            {item.label}
                                        </div>
                                    </p>
                                    <div className={styles.groupContainer}>
                                        {item.group ? (
                                            item.group.map((group, index) => (
                                                <div key={index} className={styles.groupBlock}>
                                                    <p className={styles.groupTitle}>{group.label}</p>
                                                    <ul>
                                                        {group.children.map((child, idx) => (
                                                            <li key={idx} className={styles.subCategoryItem}>
                                                                {child.label}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))
                                        ) : (
                                            <ul>
                                                {item.children?.map((child, idx) => (
                                                    <li key={idx} className={styles.subCategoryItem}>
                                                        {child.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </>
                            ))}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default SidebarMenu;