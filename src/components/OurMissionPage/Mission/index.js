import React from 'react'
import styles from '../Mission/index.module.css'

const index = () => {
    return (
        <div className={styles.missonMain}>
            <div className={styles.content}>
                <h1>Our Mission</h1>
                <p>At Bruno Pharma Innovations, our mission is to make a meaningful impact on our
                    customers’ lives—touching their hearts, minds, and well-being. This commitment drives
                    our investment in cutting-edge research and development, state-of-the-art production,
                    and rigorous quality processes. Through continuous innovation, clinical and analytical
                    performance studies, and strict adherence to regulatory and government standards, we
                    ensure excellence in everything we do.</p>
            </div>
            <div className={styles.missionImg}>
                <img src='Images/mission1.png'/>
            </div>
        </div>
    )
}

export default index
