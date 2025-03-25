import React from 'react'
import styles from '../Order/Order.module.css'

const index = () => {
  return (
    <div className={styles.HealTitle}>
      <h2>Get started today for a healthier you!</h2>
      <p>Track your ketone and glucose levels with precision for better metabolic health. Order now and start your journey to a healthier you!</p>
      <div className={styles.amzoneBtn}>
        <a href='https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true' target='blank'>
          <img src="/AmazonOrder.svg" alt="Amazon" /></a>
      </div>
    </div>
  )
}

export default index
