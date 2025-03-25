import React from "react";
import styles from "./style.module.css";


const AmazonDeals = () => {
  return (
    <div className={styles.container}>


      {/* Product Sections */}
      <div className={styles.productContainer}>
        {/* Left Product Section */}
        <div className={styles.productBox}>

          <div className={styles.productImage}>
            <img src="Images/Meter10keto.png" alt="Product" />
          </div>

          <div className={styles.detailsBox}>
            <h3>What’s Included?</h3>
            <ul>
              <li>
                <strong>Bruno MD6 Meter</strong> - Ergonomic ketone and glucose
                monitoring system
              </li>
              <li>
                <strong>1 Lancing Device</strong> - Adjustable depth for comfort
              </li>
              <li>
                <strong>10 Keto Strips</strong> - Accurate ketone tracking
              </li>
              <li>
                <strong>50 Lancets</strong> - Ultra-thin for painless pricks
              </li>
              <li>
                <strong>Carrying Case</strong> - Take your monitoring kit anywhere
              </li>
              <li>
                <strong>2 free AAA batteries</strong> - Owner’s manual, quick start
                guide, 5-year warranty card
              </li>
            </ul>
          </div>
          <div className={styles.AmazonImage}>
            <a href='https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true' target='blank'>
              <img src="/AmazonOrder.svg" alt="Amazon" /></a>
          </div>

        </div>

        {/* Center Section */}
        <div className={styles.promoSection}>
          <div className={styles.textContainer}>
            <h2>Top Amazon Deals for Your Loved Ones!</h2>
            <p>
              Find the best products for your loved ones on Amazon—quality,
              convenience, and great prices!
            </p>
          </div>
        </div>


        {/* Right Product Section */}
        <div className={styles.productBox}>
          <div className={styles.detailsBox}>
            <h3>What’s Included?</h3>
            <ul>
              <li>
                <strong>Bruno MD6 Meter</strong> - Ergonomic ketone and glucose
                monitoring system
              </li>
              <li>
                <strong>1 Lancing Device</strong> - Adjustable depth for comfort
              </li>
              <li>
                <strong>50 Glucose Strips</strong> - Accurate glucose tracking
              </li>
              <li>
                <strong>50 Lancets</strong> - Ultra-thin for painless pricks
              </li>
              <li>
                <strong>Carrying Case</strong> - Take your monitoring kit anywhere
              </li>
              <li>
                <strong>2 free AAA batteries</strong> - Owner’s manual, quick start
                guide, 5-year warranty card
              </li>
            </ul>



          </div>

          <div className={styles.productImage}>

            <img src="Images/Meter50strip.png" alt="Product" />
          </div>


          <div className={styles.AmazonImage}>
            <a href='https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true' target='blank'>
              <img src="/AmazonOrder.svg" alt="Amazon" /></a>
          </div>
        </div>


      </div>


    </div>
  );
};

export default AmazonDeals;
