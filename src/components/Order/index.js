import React from 'react'
import styles from '../Order/Order.module.css'

const index = () => {
  return (
    <div className={styles.HealTitle}>
                    <h2>Get started today for a healthier you!</h2>
                    <p>Track your ketone and glucose levels with precision for better metabolic health. Order now and start your journey to a healthier you!</p>
                    <div className={styles.amzoneBtn}>
                        <img src='svg/amazoneBtn.svg' alt=''/>
                    </div>
                </div>
  )
}

export default index
