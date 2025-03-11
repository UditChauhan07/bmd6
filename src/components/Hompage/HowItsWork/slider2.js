import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

// Custom Previous Arrow
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className={styles.customArrow} style={{ right: "-60px", opacity: 0.5 }} onClick={onClick}>
      <FaChevronLeft size={20} />
    </div>
  );
};

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => {
  return (
    <div className={styles.customArrow} style={{ right: "-110px" }} onClick={onClick}>
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
    arrows: true, 
   
  };

  const slides = [
    { id: 1, img: "images/KeyHighlights.png" },
    { id: 20, img: "images/KeyHighlights.png" },
    { id: 30, img: "images/KeyHighlights.png" },
    { id: 30, img: "images/KeyHighlights.png" },
    { id: 30, img: "images/KeyHighlights.png" },
    { id: 30, img: "images/KeyHighlights.png" }
  ];

  return (
    <div className={styles.slider6}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.img} alt="Slide" className={styles.sliderImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
