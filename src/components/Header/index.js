import React from 'react'
import styles from "./styles.module.css"

function index() {
  return (
    // <div className={styles.headerTop}>index</div>
    <>

     <div className={styles.container}>
     <div className={styles.HeaderBox}>
        <div className={styles.content}>
            <h5>LAB QUALITY RESULTS</h5>
            <h1>Blood Keytone & Glucose <br/> Monitoring System</h1>
            <p>Get the lab-quality readings at home with Bruno MD6 monitoring system which was originally developed for Doctors.</p>
            <button className={styles.ctaButton}>Start Program</button>
        </div>
        <div className={styles.imageSection}>
            <div className={styles.KetoPic}>
            <img src="ketone-blood.png" alt="Molecular Representation"/>
            </div>

            <div className={styles.productDetails1}>
            <div className={styles.productDetails}>
                <div className={styles.smallBruno}>
                <h4>Bruno MD6:</h4>
                <img src='BrunoSmall-logo.png'/>
                </div>
                <p>Precision Health at Your Fingertips</p>
                <strong>Track. Optimize. Thrive</strong>
                <a href="#" className={styles.detailsButton}>VIEW ALL DETAILS →</a>
                
            </div>
            <div className={styles.productAmazon}>
                 <img src="AmazonOrder.svg" alt="Amazon"/>
                </div>
                </div>
                {/* <div className={styles.productAmazon}>
                <a href="#" className={styles.amazonButton}> <img src="AmazonOrder.svg" alt="Amazon"/></a>
                </div> */}
    <div className={styles.socialMedia}>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
    </div>
        </div>
    </div>
    </div>
    
    
    
    
    </>
  )
}

export default index