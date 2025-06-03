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

const SliderMobile = ({ images }: { images: ImageType[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 1,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <div className={styles.sliderWrapper}>



      <div ref={sliderRef} className={styles.keenSliderVerticalEnabled}>
        {images.map((image, index) => (
          <div className={styles.keenSliderSlide} key={index}>
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

      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
            aria-label={`Ir a la diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default SliderMobile
