import React from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'
function Bullets() {
  const contextProduct = useProduct()
  // console.log('contextProduct ', contextProduct)
  const { product } = contextProduct
  const specGroups =
    '(Celulares filtros),(Filtros tablet),(consola filtros),(fields TV)'
  const onClickMoreScroll = () => {
    window.scrollBy({
      top: 700, // Cantidad de píxeles hacia abajo
      behavior: 'smooth', // Animación suave
    })
  }
  const arraySpecs =
    product?.specificationGroups?.filter((item: any) =>
      specGroups.includes(`(${item.name})`)
    ) || []
  // Verificar si arraySpecs tiene al menos un elemento antes de acceder a specifications
  const specifications =
    arraySpecs.length > 0 ? arraySpecs[0].specifications : []

  if (specifications.length == 0) {
    return null
  }

  return (
    <div className={styles.containerBullets}>
      <div className={styles.bullets}>
        <ul>
          {specifications.map((item: any) => (
            <li>
              {item.name}: <strong>{item.values[0]}</strong>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.moreScroll} onClick={onClickMoreScroll}>
        Ver más características
      </button>
    </div>
  )
}

export default Bullets
