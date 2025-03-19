import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";

function Index() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/video-tutorial");
    };

    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to restore scrolling when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]); //



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
                            <img src="Images/Family-Capri.jpg" alt="Family-in Capri" />
                        </div>
                        <div className={styles.productDetails1}>
                            <div className={styles.productDetails}>
                                <div className={styles.smallBruno}>
                                    <h4>Bruno MD6:</h4>
                                </div>
                                <p>Precision Health at Your Fingertips</p>
                                <strong>Track. Optimize. Thrive</strong>

                                {/* Open Modal Button */}
                                <a className={styles.detailsButton} onClick={() => setIsOpen(true)}>VIEW ALL DETAILS →</a>

                                {/* Modal */}
                                {isOpen && (
                                    <div className={styles.modalOverlay}>
                                        <div className={styles.modalContent}>
                                            <h2>Bruno MD6</h2>
                                            <p>Bruno MD6 Blood Ketone & Glucose Monitoring System</p>
                                            <button onClick={() => setIsOpen(false)}>Close</button>
                                        </div>
                                    </div>
                                )}

                                <div className={styles.productAmazon}>
                                    <img src="AmazonOrder.svg" alt="Amazon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.videoTutorial} ><h5>Video </h5></div>
                </div>
            </div>
        </>
    );
}

export default Index;
