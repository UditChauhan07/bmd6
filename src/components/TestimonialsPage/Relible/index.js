import React from 'react'
import styles from '../Relible/index.module.css'

const index = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.mainTitle}> <h1><b>Real Bruno MD6 </b> Testimonials</h1></div>
            <div className={styles.section}>
                <div className={styles.Part1}>
                    <h2>Bruno: Reliable, Easy, and Life-Changing</h2>
                </div>
                <div className={styles.Part2}>
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src="Images/card1.png" alt="Speedy Results" className={styles.image} />
                            <div className={styles.playButton}><img src='svg/videoBtn.svg' alt=''/></div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Speedy Results</h3>
                            <p className={styles.text}>
                                It is a relief for me to have a machine that is right there at my fingertips. I don’t have to go to the lab, in 5 seconds the results are there. It’s fast.
                            </p>
                            <div className={styles.footer}>
                                <span><img src='svg/LogoM6.svg' alt=''/></span>
                                <span className={styles.name}>Darci</span>
                                <a href="#" className={styles.learnMore}>Learn More <span><img src='svg/morearrow.svg'/></span></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src="Images/card2.png" alt="Speedy Results" className={styles.image} />
                            <div className={styles.playButton}><img src='svg/videoBtn.svg' alt=''/></div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Take Control</h3>
                            <p className={styles.text}>
                            I am so excited to let everyone know that with the Bruno, it is so awesome and so on track that you can take control of your life.
                            </p>
                            <div className={styles.footer}>
                                <span><img src='svg/LogoM6.svg' alt=''/></span>
                                <span className={styles.name}>Darrin</span>
                                <a href="#" className={styles.learnMore}>Learn More <span><img src='svg/morearrow.svg'/></span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default index
