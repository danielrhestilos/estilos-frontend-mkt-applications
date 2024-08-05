import React from 'react'
import CardVProduct from './components/CardVProduct'
import useLocalStorage from '../../hooks/localStorageHook'
import styles from './styles.css'

function VisitedProducts() {
  const [products] = useLocalStorage('productsV', [])
  console.log('products ->', products)

  return (
    <div className={styles.containerVisited}>
      {products.length > 0 && (
        <h4 className={styles.visitedTitle}>Productos visitados</h4>
      )}
      <div className={styles.gridProducts}>
        {products.map((item: any) => (
          <div>
            <CardVProduct product={item}></CardVProduct>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VisitedProducts
