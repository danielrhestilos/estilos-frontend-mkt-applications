import React, { useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styles from './slider.module.css'

type ImageType = {
  urlImage: string
  altImage: string
  link: string
  bgColor?: string
}

interface SliderProps {
  images: ImageType[]
  slidesPerView: number // Prop adicional para definir la cantidad de slides visibles en desktop
}

const SliderDesktop = ({ images, slidesPerView }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  useEffect(() => {
    // Verifica si estamos en vista de escritorio
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener('resize', handleResize)
    handleResize() // Llama una vez al cargar

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: isDesktop ? slidesPerView : 1, // Usa `slidesPerView` en desktop y 1 en móvil
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const handlePrev = () => instanceRef.current?.prev()
  const handleNext = () => instanceRef.current?.next()

  return (
    <div className={styles.sliderWrapper}>
      <div ref={sliderRef} className={`keen-slider`}>
        {images?.map((image, index) => (
          <div className={`keen-slider__slide`} key={index}>
            <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                backgroundColor: image.bgColor || 'transparent',
                width: '100%',
                height: '100%',
              }}
            >
              <img
                src={image.urlImage}
                alt={image.altImage}
                className={styles.image}
              />
            </a>
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={handlePrev}
        aria-label="Slide anterior"
      >
        ‹
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={handleNext}
        aria-label="Slide siguiente"
      >
        ›
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {/* Calculamos el número total de "páginas" que se mostrarán */}
        {Array.from({
          length: Math.ceil(images.length / (isDesktop ? slidesPerView : 1)),
        }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`${styles.dot} ${
              currentSlide === idx ? styles.active : ''
            }`}
            aria-label={`Ir a la diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default SliderDesktop
