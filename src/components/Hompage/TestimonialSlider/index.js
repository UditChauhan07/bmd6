import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";

const testimonials = [
  {
    id: 1,
    text: "It is a relief for me to have a machine that is right there at my fingertips, I don’t have to go to the lab, in 5 seconds the results are there. It’s fast.",
    author: "Darci",
    authorImage: "Images/testimonialSlider1.png",
    videoUrl: "https://www.youtube.com/embed/nkE3SBy9sJc",
    review: "Speedy Results",
  },
  {
    id: 2,
    text: "This device changed my life! Monitoring my glucose has never been easier.",
    author: "Darrin",
    authorImage: "Images/testimonialSlider2.png",
    videoUrl: "https://www.youtube.com/embed/N-d5BJfY-xU",
    review: "Take Control",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.sliderMain}>
      <div className={styles.testimonialContainer}>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialSlide}>
              <div className={styles.testimonialContent}>
                {/* Video Section */}
                <div className={styles.testimonialVideo}>
                  <div className={styles.videoEmbed}>
                    <span className={styles.videoTag}>
                      REAL STORIES : {testimonial.review}
                    </span>
                    <iframe
                      width="100%"
                      height="250"
                      src={testimonial.videoUrl}
                      title="Testimonial Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* Testimonial Text Section */}
                <div className={styles.testimonialText}>
                  <div className={styles.bockque}>
                    <div className={styles.quoteContent}>
                      <div className={styles.quoteIcon}>
                        <img src="Quoet-Svg.svg" alt="Quote" />
                      </div>
                      <blockquote>{testimonial.text}</blockquote>
                    </div>
                    <hr />
                    <div className={styles.testimonialAuthor}>
                      <img src={testimonial.authorImage} alt={testimonial.author} />
                      <span>– {testimonial.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>



      {/* Custom Buttons Outside Slider */}
      <div className={styles.MycustiomBtn}>
        <div className={styles.leftArrow} onClick={() => sliderRef.current?.slickPrev()}>
          <img src="svg/arrow-left.svg" alt="Left Arrow" />
        </div>
        <div className={styles.rightArrow} onClick={() => sliderRef.current?.slickNext()}>
          <img src="svg/arrow-right.svg" alt="Right Arrow" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
