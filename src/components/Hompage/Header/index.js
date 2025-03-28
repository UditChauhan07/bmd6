import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';


function Index() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.HeaderBox}>
                    <div className={styles.content}>
                        <h5>LAB QUALITY RESULTS</h5>
                        <h1>Bruno MD6 Blood Ketone & Glucose Monitoring System</h1>
                        <p>Get the lab-quality readings at home with Bruno MD6 monitoring system which was originally developed for Doctors.</p>
                    </div>
                    <div className={styles.imageSection}>
                        <div className={styles.KetoPic}>
                            <img src="Images/FamilyCapri1.png" alt="FamilyCapri1" />
                        </div>
                        <div className={styles.productDetails1}>
                            <div className={styles.productDetails}>
                                <div className={styles.smallBruno}>
                                    <h4>Bruno MD6: Precision Health at Your Fingertips</h4>
                                </div>
                                <strong>Track. Optimize. Thrive</strong>
                                <div className={styles.AmaznBtn}>  <a href='https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true' target='blank'><img src="AmazonOrder.svg" alt="Amazon" /></a>  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Index;

