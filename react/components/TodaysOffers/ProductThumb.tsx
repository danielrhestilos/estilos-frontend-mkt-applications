import React from "react";
import styles from "./styles.css"
const ProductThumb = () => {
    return (
      <div className={styles.productThumb}>
        <div className={styles.productLabel}>
          <span className={styles.sale}>-19%</span>
        </div>
        <a 
          href="https://bw-mystyle.bzotech.com/product/harbinger-ab-carver-sport/" 
          className={`${styles.productThumbLink} ${styles.elbzotechPostGrid}`}
        >
          <img 
            loading="lazy" 
            decoding="async" 
            width="307" 
            height="307" 
            src="https://bw-mystyle.bzotech.com/wp-content/uploads/2023/07//produt-new-8-307x307.png" 
            className={`${styles.attachment307x307} ${styles.size307x307} ${styles.wpPostImage}`} 
            alt=""
          />
        </a>
        <div className={styles.productTagList}>
          <a href="https://bw-mystyle.bzotech.com/product-tag/zara/">Zara</a>
        </div>
        <h3 className={`${styles.title20} ${styles.productTitle} ${styles.fontSemibold}`}>
          <a 
            className={styles.colorTitle} 
            title="Ligula Ullamcorper Coach" 
            href="https://bw-mystyle.bzotech.com/product/harbinger-ab-carver-sport/"
          >
            Ligula Ullamcorper Coach
          </a>
        </h3>
        <div className={`${styles.productPrice} ${styles.price}`}>
          <span className={styles.woocsPriceCode} data-currency="" data-redraw-id="66587474136d8" data-product-id="3165">
            <del aria-hidden="true">
              <span className={styles.woocommercePriceAmount}>
                <bdi>
                  <span className={styles.woocommercePriceCurrencySymbol}>$</span>260.00
                </bdi>
              </span>
            </del>
            <ins>
              <span className={styles.woocommercePriceAmount}>
                <bdi>
                  <span className={styles.woocommercePriceCurrencySymbol}>$</span>211.00
                </bdi>
              </span>
            </ins>
          </span>
        </div>
      </div>
    );
  };
  export default ProductThumb