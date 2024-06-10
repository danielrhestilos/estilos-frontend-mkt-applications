import React from "react";
import styles from "./styles.css";
import ProductThumb from "./ProductThumb";
import Slider from "../Slider/Slider";

function TodaysOffers() {
  return (
    <div className={styles.todaysOffersCont}>
      <div className={styles.productInfo}>
        <div className={styles.sectionTitle}>Today offers</div>
        <div className={styles.sectionDescription}>
          <p>
            Promotions are selling out quickly, hurry up so you don't miss out
          </p>
        </div>
        <div className={`${styles.bzotechCountdown} flex-wrapper`} data-date="04/25/2025">
          <div className={`${styles.clock} ${styles.day}`}>
            <strong className="number title34 font-semibold">329</strong>
            <span className="text title20 font-medium">DAYS</span>
          </div>
          <div className={`${styles.clock} ${styles.hour}`}>
            <strong className="number title34 font-semibold">15</strong>
            <span className="text title20 font-medium">HOURS</span>
          </div>
          <div className={`${styles.clock} ${styles.min}`}>
            <strong className="number title34 font-semibold">31</strong>
            <span className="text title20 font-medium">MINS</span>
          </div>
          <div className={`${styles.clock} ${styles.sec}`}>
            <strong className="number title34 font-semibold">29</strong>
            <span className="text title20 font-medium">SECS</span>
          </div>
        </div>
        <div className={styles.actionButtons}>
          <button
            // type="hidden"
            name="addtocart-ajax-nonce"
            className={styles.buttonBuy}

          >
          <span className={styles.text}>Add to cart</span>
          </button>
        </div>
      </div>
      
      <Slider
              // infinite={true}
              // showNavigationArrows="never"
            //   showPaginationDots={
            //    " "orientation === "vertical" ? "always" : "never"""
            //   }
              // usePagination={true}
              // fullWidth={false}
              // arrowSize={5}
              // itemsPerPage={1}
              // centerMode="disabled"
            //   centerModeSlidesGap            
            >
            <ProductThumb/>
            <ProductThumb/>
            <ProductThumb/>
    </Slider> 
      
    </div>
  );
}

export default TodaysOffers;