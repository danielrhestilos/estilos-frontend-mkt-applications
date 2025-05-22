import { useState } from 'react';
import styles from './styles.module.css';

const menuData = [
    {
        label: 'Electrodomésticos',
        children: [
            {
                label: 'Cocina',
                children: [
                    { label: 'Cocinas a gas' },
                    { label: 'Microondas' },
                ],
            },
            {
                label: 'Lavado',
                children: [
                    { label: 'Lavadoras' },
                    { label: 'Secadoras' },
                ],
            },
        ],
    },
    {
        label: 'Tecnología',
        children: [
            {
                label: 'Celulares',
                children: [
                    { label: 'Smartphones' },
                    { label: 'Accesorios' },
                ],
            },
        ],
    },
];

const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleSubmenu = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const renderMenu = (items, level = 0, parentKey = '') => {
        return (
            <ul className={`${styles.menuLevel} ${styles[`level${level}`]}`}>
                {items.map((item, i) => {
                    const key = `${parentKey}-${i}`;
                    const isOpen = openIndexes.includes(key);
                    return (
                        <li key={key}>
                            <div className={styles.menuItem}>
                                <span>{item.label}</span>
                                {item.children && (
                                    <button className={styles.toggleBtn} onClick={() => toggleSubmenu(key)}>▶</button>
                                )}
                            </div>
                            {item.children && isOpen && renderMenu(item.children, level + 1, key)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <>
            <button className={styles.burger} onClick={toggleMenu}>☰</button>
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <button className={styles.closeBtn} onClick={toggleMenu}>×</button>
                <nav>{renderMenu(menuData)}</nav>
            </aside>
            {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
        </>
    );
};

export default SidebarMenu;
