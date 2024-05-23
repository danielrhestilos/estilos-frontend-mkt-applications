import React from 'react'
import { Link /*,useRuntime*/ } from 'vtex.render-runtime'
import styles from './CarouselProducts.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PEN',
});


const SummaryHorizontal = ({ item, id }: any) => {
  // const { navigate }: any = useRuntime()
  const valuedisc = 100 - (Math.round(item?.price * 100 / item?.listPrice))
  return (
    <Link  /*onClick={()=>{navigate(`/${item?.linkText}/p`)}} */
      className={`${styles.productLink} ${styles.productLinkHorizontal} ${id}Tk`} to={`/${item?.linkText}/p`}
      key={item?.productId}
    >
      <img className={`${styles.image} ${styles.imageHorizontal}`} src={item?.imageUrl} alt={item?.productName} />
      <div className={`${styles.productContent} ${styles.productContentHorizontal}`} id={item?.productId}  >
        {
          valuedisc != 0 && <div className={styles.percentageD}>
            -{valuedisc}%
          </div>
        }
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

export default SummaryHorizontal