import React from 'react'
import styles from './styles.css'
function CardVProduct(props: any) {
  return (
    <a href={`/${props.product.linkText}/p`} style={{ textDecoration: 'none' }}>
      <div className={styles.cardProductView}>
        <p className={styles.brandProductView}>{props.product.brand}</p>
        <img
          src={props.product.items[0].images[0].imageUrl}
          className={styles.imgCardProductView}
        />
        <p className={styles.productNameView}>{props.product.productName}</p>
      </div>
    </a>
  )
}

export default CardVProduct
