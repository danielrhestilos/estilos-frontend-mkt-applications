import React from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'
function Bullets() {
  const contextProduct = useProduct()
  // console.log('contextProduct ', contextProduct)
  const { product } = contextProduct
  const specGroups =
    '(Celulares filtros),(Filtros tablet),(consola filtros),(fields TV)'

  const arraySpecs =
    product?.specificationGroups?.filter((item: any) =>
      specGroups.includes(`(${item.name})`)
    ) || []

  console.log('arraySpecs ', arraySpecs)

  // Verificar si arraySpecs tiene al menos un elemento antes de acceder a specifications
  const specifications =
    arraySpecs.length > 0 ? arraySpecs[0].specifications : []
  console.log('specifications ', specifications)

  if (specifications.length == 0) {
    return null
  }

  return (
    <div className={styles.bullets}>
      <ul>
        {specifications.map((item: any) => (
          <li>
            <strong>{item.name}:</strong> {item.values[0]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bullets
