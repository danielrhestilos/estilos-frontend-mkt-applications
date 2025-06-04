import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styles from './slider.module.css'

type ImageType = {
  urlImage: string
  altImage: string
  link: string
  bgColor?: string
}

type SliderDesktopProps = {
  images: ImageType[]
  slidesPerView?: number // Nueva prop opcional
}

const SliderDesktop = ({ images, slidesPerView = 3 }: SliderDesktopProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: slidesPerView,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const handlePrev = () => instanceRef.current?.prev()
  const handleNext = () => instanceRef.current?.next()

  return (
    <div className={styles.sliderWrapper}>
      <div ref={sliderRef} className="keen-slider">
        {images?.map((image, index) => (
          <div className="keen-slider__slide" key={index}>
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
        {Array.from({ length: Math.ceil(images.length / slidesPerView) }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() =>
                instanceRef.current?.moveToIdx(idx * slidesPerView)
              }
              className={`${styles.dot} ${
                currentSlide >= idx * slidesPerView &&
                currentSlide < (idx + 1) * slidesPerView
                  ? styles.active
                  : ''
              }`}
              aria-label={`Ir a la página ${idx + 1}`}
            />
          )
        )}
      </div>
    </div>
  )
}

export default SliderDesktop
