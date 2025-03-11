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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true, 
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    { id: 1, img: "/GlucoTest.png" },
    { id: 20, img: "/GlucoTest.png" },
    { id: 30, img: "/GlucoTest.png" },
  ];

  return (
    <div className={styles.sliderContainer}>
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
