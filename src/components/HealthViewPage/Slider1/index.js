import React, { useRef } from 'react';
import styles from '../Slider1/index.module.css';
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS

const Index = () => {
    const sliderRef = useRef(null); // Ref for Slider component

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const steps = [
        {
            step: "Step 01",
            title: "RECORD",
            description: "Patients use the Bruno MD6 monitoring system to track their vital health data.",
            image: "Images/step1.png",
            highlight: "Tracks vital health data",
        },
        {
            step: "Step 02",
            title: "UPLOAD",
            description: "Easily upload data to the Bruno MD6 TeleHealth system from a PC, smartphone, or home computer.",
            image: "Images/step2.png",
            highlight: "Telehealth system",
        },
        {
            step: "Step 03",
            title: "SHARE",
            description: "Securely share health records with physicians, family members, and caregivers through the Bruno MD6 TeleHealth system on any device.",
            image: "Images/step3.png",
            highlight: "Securely share health records",
        },
    ];

    return (
        <div className={styles.slider1Div}>
            <div className={styles.slider1Main}>
                <div className={styles.headerPart}>
                    <div className={styles.tittle}>
                        <h1>Bruno Telehealth: <b>Easy Health Monitoring</b></h1>
                    </div>
                    <div className={styles.subtitle}>
                        <p>Bruno Telehealth offers effortless and accessible remote health monitoring, providing seamless telehealth solutions for better healthcare convenience and peace of mind.</p>
                    </div>
                </div>
                {/* Slider Part */}
                <div className={styles.sliderContainer}>
                    <Slider ref={sliderRef} {...settings}>
                        {steps.map((step, index) => (
                            <div key={index} className={styles.slide}>
                                <div className={styles.card}>
                                    <div className={styles.textPart}>
                                        <span className={styles.stepTag}>{step.step}</span>
                                        <h2 className={styles.title}>{step.title}</h2>
                                        <p className={styles.description}>{step.description}</p>
                                        <p className={styles.highlight}><b>BrunoMD6:</b> {step.highlight}</p>
                                    </div>
                                    <div className={styles.imagePart}>
                                        <img src={step.image} alt={step.title} className={styles.image} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Custom button div for left and right navigation */}
                <div className={styles.customButtons}>
                    <div className={styles.leftButton} onClick={() => sliderRef.current.slickPrev()}><img src='svg/leftbtn.svg' alt='' /></div>
                    <div className={styles.rightButton} onClick={() => sliderRef.current.slickNext()}><img src='svg/rightbtn.svg' alt='' /></div>
                </div>
            </div>
        </div>
    );
};

export default Index;
