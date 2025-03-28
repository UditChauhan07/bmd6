import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";

function MoneyBackGuarantee() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  const images = [
    'svg/High-Accuracy.svg',
    'svg/Fast-Result.svg',
    'svg/Blood-Sample.svg',
    'svg/User-Friendly.svg',
    'svg/Travel-Friendly.svg',
    'svg/Insurance-Needed.svg',
    'svg/TrackingSharing.svg'
  ];

  return (
    <div className={styles.MainSection1}>
      <div className={styles.container}>
        {isMobile ? (
          <Slider {...sliderSettings} className={styles.slider}>
            {images.map((src, index) => (
              <div key={index} className={styles.slideItem}>
                <img src={src} alt={`Slide ${index + 1}`} className={styles.slideImage} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.MainSection}>
            {images.map((src, index) => (
              <div key={index} className={styles.slideItem}>
                <img src={src} alt={`Icon ${index + 1}`} className={styles.slideImage} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoneyBackGuarantee;
