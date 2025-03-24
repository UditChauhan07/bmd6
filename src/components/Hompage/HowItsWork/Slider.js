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
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true, 
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    { id: 1, img: "Images/Device1.gif" },
    { id: 20, img: "Images/Device2.gif" },
    { id: 30, img: "Images/Device3.gif" },
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
