import React, { useState, useEffect } from 'react'
import styles from './styles.css'
type StickyWrapperProps = {
    threshold?: number // Umbral de desplazamiento
    children: React.ReactNode // Contenido que se va a envolver
}

const StickyWrapper: React.FC<StickyWrapperProps> = ({
    threshold = 1,
    children,
}) => {
    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        // Función que maneja el evento de desplazamiento
        const handleScroll = () => {
            if (window.scrollY > window.innerWidth * (threshold / 100)) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        }

        // Asociamos el evento de scroll
        window.addEventListener('scroll', handleScroll)

        // Limpiar el evento cuando el componente se desmonta
        return () => window.removeEventListener('scroll', handleScroll)
    }, [threshold])

    return <div className={isFixed ? styles.sticky : ''}>{children}</div>
}

export default StickyWrapper
