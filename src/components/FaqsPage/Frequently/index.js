import React from 'react'
import styles from '../Frequently/index.module.css'

const index = () => {
  return (
    <div className={styles.FrequMain}>
      <div className={styles.FrequImg}>
        <img src='Images/Faqimg.png' alt='' />
      </div>
      <div className={styles.Title}><h2>Frequently Asked Questions</h2></div>
    </div>
  )
}

export default index
