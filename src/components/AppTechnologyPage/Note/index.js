import React from 'react'
import styles from '../Note/index.module.css'

const index = () => {
    return (
        <div className={styles.marqueeMain}>
            <div className={styles.banner}>
                <span className={styles.label}>Please Note:</span>
                <div className={styles.marquee}>
                    <marquee>
                        Bruno MD6 is a self-monitoring tool designed for information tracking and management.
                        It is not intended to diagnose, treat, or prevent any medical condition.
                        Always consult your doctor for personalized medical advice.
                    </marquee>
                </div>
            </div>
        </div>

    )
}

export default index
