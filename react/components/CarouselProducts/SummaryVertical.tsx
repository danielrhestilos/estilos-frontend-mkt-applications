import React from 'react'
import { Link } from 'vtex.render-runtime'
import styles from './CarouselProducts.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PEN',
});


const SummaryVertical = ({ item, id }: any) => {
  const valuedisc = 100 - (Math.round(item?.price * 100 / item?.listPrice))

  return (
    <Link className={`${styles.productLink} ${id}Tk`} to={`/${item?.linkText}/p`} >
      <div className={styles.productContent} id={item?.productId}  >
        {
          valuedisc != 0 && <div className={styles.percentageD}>
            -{valuedisc}%
          </div>
        }
        <img className={styles.image} src={item?.imageUrl} alt={item?.productName} />
        <p className={styles.brand}>{item?.brand}</p>
        <p className={styles.name}>{item?.productName}</p>
        <p>
          {item?.listPrice !== item?.price
            && <span className={styles.oldPrice}>
              {formatter.format(item?.listPrice).replace("PEN", "S/")}
            </span>
          }
          <span className={styles.price}>{formatter.format(item?.price).replace("PEN", "S/")}</span>
        </p>
      </div>
    </Link>
  )
}

export default SummaryVertical