import React from 'react'
import styles from '../Electrode/Electrode.module.css'

const Electrode = () => {
    return (
        <section>
            <div className={styles.MainDiv}>
                <div className={styles.electrodImg}>
                    <div className={styles.electrodDiv}>
                        <div className={styles.ElectrodeContent}> 
                            <p>Science Behind BRUNO MD6 </p>
                            <h2>Advanced 5-Electrode Technology for Precision Testing</h2>
                            <div className={styles.desc}>
                                <p>The <b>BRUNO MD6</b> is designed with cutting-edge <b>5-electrode technology,</b>  ensuring highly accurate and reliable glucose readings. </p>
                                <p>Our innovative 2-Well Technology utilizes two specialized enzymes on the test strips to measure both <b>hematocrit (HCT)</b>  levels and <b>glucose levels</b> simultaneously.</p>
                                <div className={styles.amzoneBtn}>
                                    <img src='svg/amazoneBtn.svg' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.ElectrodeHCT}>
                            <img src='Images/hctImg.png' alt='' />

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Electrode
