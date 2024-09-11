import { useEffect, useRef, useState } from 'react'

const useRevealOnScroll = () => {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target) // Dejar de observar cuando el elemento se hace visible
                }
            },
            { threshold: 0.1 } // Se activará cuando al menos el 10% del elemento esté visible
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])

    return { isVisible, elementRef }
}

export default useRevealOnScroll
