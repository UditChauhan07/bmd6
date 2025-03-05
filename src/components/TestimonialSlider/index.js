import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";

// Custom Arrow Components
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.nextArrow}`} onClick={onClick}>
      <img src="arrow-right.svg" alt="Next" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.prevArrow}`} onClick={onClick}>
      <img src="arrow-left.svg" alt="Previous" />
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    text: "Finally, with the Bruno MD6, I am managing my diabetes like I have always wanted to. I love it so much that I wish it was here 42 years ago.",
    author: "Darrin",
    authorImage: "Darrin.png",
    videoThumbnail: "BloodTestS.png",
  },
  {
    id: 2,
    text: "This device changed my life! Monitoring my glucose has never been easier.",
    author: "Samantha",
    authorImage: "Darrin.png",
    videoThumbnail: "BloodTestS.png",
  },
  {
    id: 3,
    text: "With the Bruno MD6, I feel more in control of my health than ever before!",
    author: "Michael",
    authorImage: "Darrin.png",
    videoThumbnail: "BloodTestS.png",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.sliderMain}>
      <div className={styles.testimonialContainer}>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialSlide}>
              <div className={styles.testimonialContent}>
                {/* Video Section */}
                <div className={styles.testimonialVideo}>
                  <span className={styles.videoTag}>REAL STORIES</span>
                  <div className={styles.videoThumbnail}>
                    <img src={testimonial.videoThumbnail} alt="Video Thumbnail" />
                    {/* <div className={styles.playButton}>▶</div> */}
                  </div>
                </div>

                {/* Testimonial Text Section */}
                <div className={styles.testimonialText}>
                  <div className={styles.bockque}>
                    <span className={styles.quoteIcon}> <img src="Quoet-Svg.svg"/> </span>
                    <div>
                  <blockquote>
                    {testimonial.text}
                  </blockquote>
<hr></hr>
                  <div className={styles.testimonialAuthor}>
                    <img src={testimonial.authorImage} alt={testimonial.author} />
                    <span>– {testimonial.author}</span>
                  </div>

                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
