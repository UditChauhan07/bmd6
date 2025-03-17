import React from 'react'
import styles from '../Informed/index.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Bothsection}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2 className={styles.heading}>Stay Connected & Informed</h2>
          <p className={styles.description}>
            Easily share your data with your healthcare team via Bruno MD6's TeleHealth integration. Post screen images on Facebook, email, or share insights instantly with family and caregivers.
          </p>
        </div>

        {/* Right Section - Features */}
        <div className={styles.rightSection}>
          <div className={styles.feature}>
            <img src="svg/sync.svg" className={styles.icon} />
            <span className={styles.featureText}>TeleHealth Sync</span>
          </div>
          <div className={styles.feature}>
            <img src="svg/socialsharing.svg" className={styles.icon} />

            <span className={styles.featureText}>Social Sharing</span>
          </div>
          <div className={styles.feature}>
            <img src="svg/quickupdates.svg" className={styles.icon} />
            <span className={styles.featureText}>Quick Updates</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default index
