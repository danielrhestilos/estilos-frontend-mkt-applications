import React, { useState, useEffect } from 'react'
import styles from './styles.css'
import useProduct from 'vtex.product-context/useProduct'

function FixedPDP({ children }: any) {
  const productContext = useProduct()
  const { product } = productContext
  const [isVisible, setIsVisible] = useState(false)

  // Comprueba si 'product' y 'product.categories' existen antes de procesar
  // const categories =
  //   product?.categories?.[0]
  //     ?.split('/')
  //     .filter((item: string) => item !== '')
  //     .reverse() || []

  // const category = categories.length > 0 ? categories[0] : 'Sin categoría'

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    if (scrollPosition > windowHeight * 0.33) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    console.log('product ', product)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
      className={styles.containerFixedPDP}
    >
      <div className={styles.mainContainer}>
        <div className={styles.namesContainer}>
          <div className={styles.productName}>
            {/* <div className={styles.brandContainer}>{category}</div> */}
            {product?.productName}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default FixedPDP
