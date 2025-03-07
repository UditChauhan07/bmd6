import React from 'react'
import styles from '../Measurement/Measurement.module.css'

const Measurement = () => {
    return (
        <section>
            <div className={styles.MeasurementMain} >
                <div className={styles.MeasurementDiv}>
                    <div className={styles.MeasurementImg}>
                        <img src='Images/measurImg.png' alt='' />
                    </div>
                    <div className={styles.mesurContentBorder}>
                        <div className={styles.mesurContent}>
                            <div>
                                <h2>BRUNO MD6: Accurate Glucose Measurement</h2>
                                <p>HCT levels vary among individuals, especially in those with conditions like gestational diabetes or dialysis patients and can significantly impact glucose readings.</p>
                                <p>By precisely determining the HCT value, the BRUNO MD6 automatically compensates for these variations, delivering a fast, precise, and clinically reliable glucose measurement every time.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.HealTitle}>
                    <h2>Get started today for a healthier you!</h2>
                    <p>Track your ketone and glucose levels with precision for better metabolic health. Order now and start your journey to a healthier you!</p>
                    <div className={styles.amzoneBtn}>
                        <img src='svg/amazoneBtn.svg' alt=''/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Measurement
