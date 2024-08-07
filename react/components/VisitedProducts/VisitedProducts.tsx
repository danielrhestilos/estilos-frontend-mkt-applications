import React, { useState } from 'react'
import CardVProduct from './components/CardVProduct'
import { Slider, Slide, Dots } from 'vtex.slider'
import useResize from '../../hooks/sizeScreenHook'
import { ButtonPlain } from 'vtex.styleguide'
import useLocalStorage from '../../hooks/localStorageHook'
import styles from './styles.css'

function VisitedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [products] = useLocalStorage('productsV', [])
  // console.log('products ->', products)
  const perPage = {
    1300: 4,
    900: 2,
    700: 2,
    600: 1,
  }
  const [, isMobil] = useResize()
  const diffSlides = isMobil ? 1 : 3
  // const refSlides = isMobil ? :
  const handleChangeSlide = (i: number) => {
    setCurrentSlide(i)
  }
  console.log('isMobil ', isMobil)

  return (
    <div className={styles.containerVisited}>
      {products.length > 0 && (
        <h4 className={styles.visitedTitle}>
          No esperes más, llévatelos ahora
        </h4>
      )}
      <div className={styles.rowVisited}>
        <>
          {currentSlide > diffSlides && (
            <ButtonPlain
              className={`${styles.arrowPrev} mr2`}
              styles={{
                backgroundColor: '#fff',
              }}
              onClick={() => {
                setCurrentSlide((prev) => prev - diffSlides)
              }}
            >
              <p className="w-100 pa3 flex flex-column justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    stroke="currentColor"
                    strokeWidth="2" // Puedes ajustar el grosor cambiando el valor
                    d="M10.696.722C10.825.722 10.953.769 11.054.864 11.266 1.061 11.276 1.394 11.079 1.606L6.731 6.256C6.236 6.751 5.972 7.39 5.972 8.071 5.972 8.753 6.236 9.392 6.718 9.874L11.079 14.536C11.276 14.748 11.266 15.081 11.054 15.278 10.843 15.474 10.51 15.466 10.312 15.254L5.963 10.603C5.296 9.936 4.921 9.033 4.921 8.071 4.921 7.11 5.296 6.207 5.975 5.527L10.311.889C10.414.779 10.554.723 10.694.723L10.696.722Z"
                    fill="currentColor"
                  />
                </svg>
              </p>
            </ButtonPlain>
          )}
        </>
        <Slider
          loop
          easing="ease"
          duration={500}
          perPage={perPage}
          currentSlide={currentSlide}
          onChangeSlide={handleChangeSlide}
        >
          {products.map((item: any) => (
            <Slide>
              <div>
                <CardVProduct product={item}></CardVProduct>
              </div>
            </Slide>
          ))}
        </Slider>
        <>
          {currentSlide !== 9 && (
            <ButtonPlain
              className={`${styles.arrowNext} ml2`}
              onClick={() => {
                setCurrentSlide((prev) => prev + diffSlides)
              }}
            >
              <p className="w-100 pa3 flex flex-column justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.432 1.067C5.309 1.067 5.187 1.112 5.091 1.202 4.889 1.39 4.879 1.707 5.067 1.909L9.209 6.339C9.68 6.81 9.932 7.419 9.932 8.068 9.932 8.717 9.68 9.326 9.221 9.785L5.067 14.226C4.879 14.428 4.889 14.745 5.091 14.933 5.292 15.12 5.609 15.112 5.798 14.91L9.94 10.48C10.576 9.844 10.933 8.984 10.933 8.068 10.933 7.152 10.576 6.292 9.929 5.644L5.799 1.226C5.7 1.121 5.567 1.068 5.434 1.068L5.432 1.067Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </p>
            </ButtonPlain>
          )}
        </>
      </div>
      <div>
        <div>
          {!isMobil && (
            <Dots
              loop
              showDotsPerPage
              blockClass="sss"
              perPage={perPage}
              currentSlide={currentSlide}
              totalSlides={9}
              onChangeSlide={handleChangeSlide}
              classes={{
                root: 'pv5',
                notActiveDot: 'bg-muted-3',
                dot: `dot pointer br-100 h-100 w-100 ${styles.dotsito} `,
                activeDot: 'bg-emphasis',
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default VisitedProducts
