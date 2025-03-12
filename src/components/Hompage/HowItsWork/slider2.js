import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Previous Arrow
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className={styles.customArrow} style={{ left: "-60px", opacity: 0.5 }} onClick={onClick}>
      <FaChevronLeft size={20} />
    </div>
  );
};

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => {
  return (
    <div className={styles.customArrow} style={{ right: "-60px" }} onClick={onClick}>
      <FaChevronRight size={20} />
    </div>
  );
};

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    { id: 1, KeyName: " Dual Monitoring", img: "Images/KeyHighlights.png" },
    { id: 2, KeyName: "High Accuracy Technology", img: "Images/KeyHighlights.png" },
    { id: 3, KeyName: "Fast Results", img: "Images/KeyHighlights.png" },
    { id: 4, KeyName: "Minimal Blood Sample", img: "Images/minimalBloodSample.png" },
    { id: 5, KeyName: "Portable & Travel Friendly", img: "Images/KeyHighlights.png" },
    { id: 6, KeyName: "Effortless Tracking & Sharing", img: "Images/KeyHighlights.png" }
  ];

  return (
    <div className={styles.slider6}>
      <Slider className="Slider6" {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.img} alt="Slide" className={styles.sliderImage} />
            <h4 className={styles.sliderTitle}>  {slide.KeyName} </h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
