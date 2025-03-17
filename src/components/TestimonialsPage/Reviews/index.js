import React from 'react'
import styles from '../Reviews/index.module.css'

const index = () => {
  return (
    <div className={styles.mainDiv}>
    <div className={styles.section}>
        <div className={styles.Part1}>
            <h2>Bruno MD6 in Real Life hear What Others Are Saying</h2>
            <span><img src='svg/MD6.svg' alt=''/></span>
          
        </div>

        <div className={styles.Part2}>
        <div className={styles.cardPart}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src="Images/card3.png" alt="Speedy Results" className={styles.image} />
                    <div className={styles.playButton}><img src='svg/videoBtn.svg' alt=''/></div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>Family First</h3>
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
                    <img src="Images/card4.png" alt="Speedy Results" className={styles.image} />
                    <div className={styles.playButton}><img src='svg/videoBtn.svg' alt=''/></div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>TEasy Technology</h3>
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
            <div className={styles.cardPart2}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src="Images/card5.png" alt="Speedy Results" className={styles.image} />
                    <div className={styles.playButton}><img src='svg/videoBtn.svg' alt=''/></div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>Accuracy Is Key</h3>
                    <p className={styles.text}>
                    I feel like I am getting lab quality results when I test with the Bruno which is really nice. It is very consistent and very accurate which I love.
                    </p>
                    <div className={styles.footer}>
                        <span><img src='svg/LogoM6.svg' alt=''/></span>
                        <span className={styles.name}>Francis</span>
                        <a href="#" className={styles.learnMore}>Learn More <span><img src='svg/morearrow.svg'/></span></a>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src="Images/card6.png" alt="Speedy Results" className={styles.image} />
                    <div className={styles.playButton}><img src='svg/videoBtn.svg' alt=''/></div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>Managability</h3>
                    <p className={styles.text}>
                    The Bruno lets me live a normal life, it’s so much better than my old meters. It has just been the greatest thing for me for my manageability.
                    </p>
                    <div className={styles.footer}>
                        <span><img src='svg/LogoM6.svg' alt=''/></span>
                        <span className={styles.name}>Jodi</span>
                        <a href="#" className={styles.learnMore}>Learn More <span><img src='svg/morearrow.svg'/></span></a>
                    </div>
                </div>
            </div>
            </div>

        </div>
        
    </div>
</div>
  )
}

export default index
