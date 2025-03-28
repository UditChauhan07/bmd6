import React from 'react'
import styles from '../Studies/index.module.css'

const index = () => {
  return (
    <div className={styles.FrequMain}>
    <div className={styles.FrequImg}>
      <img src='Images/study.png' alt='' />
    </div>
    <div className={styles.Title}><h2>Clinical Studies and Instructions for Use</h2></div>
  </div>
  )
}

export default index
