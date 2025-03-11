import React from 'react'
import styles from '../Health/index.module.css'

const index = () => {
    return (
        <div className={styles.healthmain}>
            <div className={styles.Bg}>
                <div className={styles.Contents}>
                    <div className={styles.LeftSection}>
                        <h2>24/7 Health View</h2>
                        <p>Bruno MD's TeleHealth system provides real-time access to vital health records for physicians, caregivers, and family members who need daily or weekly updates on a patient’s condition. </p>
                    </div>

                    <div className={styles.RightSection}>
                        <div className={styles.topbox}>
                            <div className={styles.Box1}>
                                <h5>Real-time access</h5>
                            <div className={styles.BoxImg}>
                                <img src='svg/real-access.svg'/>
                            </div>

                            </div>
                            <div className={styles.Box2}>
                            <h5>Secure, instant access</h5>
                            <div className={styles.BoxImg}>
                                <img src='svg/secure-access.svg'/>
                            </div>
                            </div>

                        </div>
                        <div className={styles.bottombox}>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
