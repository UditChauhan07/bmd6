import React from 'react'
import styles from '../NewFooter/index.module.css'

const Index = () => {
    return (
        <div className={styles.footer}>
            <footer className={styles.footerBar}>
                <div className={styles.logoSection}>
                    <img src="Images/whiteLogo.png" alt="Bruno MD6 Logo" className={styles.logo} />
                    <div className={styles.newsletter}>
                        <span>Subscribe To Our Newsletter: </span>
                        <input type="email" placeholder="Enter your email address" />
                        <div className={styles.arrowBtn}><button><img src='svg/inputArrow.svg' alt='inputarrow'/></button></div>
                    </div>
                </div>

                <h2 className={styles.heading}>
                Lab-quality accuracy at home with Bruno MD6.
                </h2>
                <hr className={styles.line} />
                <div className={styles.links}>
                    <a href="#">Contact Us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Order on Amazon.com</a>
                </div>
                <div className={styles.copyright}>
                <p >Copyright © 2025, Bruno Pharma</p>
                </div>
               
            </footer>
        </div>
    )
}

export default Index
