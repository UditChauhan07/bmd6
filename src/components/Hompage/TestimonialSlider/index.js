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
    text: "It is a relief for me to have a machine that is right there at my fingertips, I don’t have to go to the lab, in 5 seconds the results are there. It’s fast.",
    author: "Darci",
    authorImage: "Images/testimonialSlider1.png",
    videoUrl: "https://www.youtube.com/embed/nkE3SBy9sJc?autoplay=0&controls=1&wmode=transparent&rel=0&showinfo=1&autohide=1&modestbranding=1",
    review: "Speedy Results",
  },
  {
    id: 2,
    text: "This device changed my life! Monitoring my glucose has never been easier.",
    author: "Darrin",
    authorImage: "Images/testimonialSlider2.png",
    videoUrl: "https://www.youtube.com/embed/N-d5BJfY-xU?autoplay=0&controls=1&wmode=transparent&rel=0&showinfo=1&autohide=1&modestbranding=1",
    review: "Take Control",
  },
  {
    id: 3,
    text: "With the Bruno MD6, I feel more in control of my health than ever before!",
    author: "Lyle",
    authorImage: "Images/testimonialSlider3.png",
    videoUrl: "https://www.youtube.com/embed/mQSW9yRzuk4?autoplay=0&controls=1&wmode=transparent&rel=0&showinfo=1&autohide=1&modestbranding=1",
    review: "Family First",
  },

  {
    id: 4,
    text: "With the Bruno MD6, I feel more in control of my health than ever before!",
    author: "San",
    authorImage: "Images/testimonialSlider4.png",
    videoUrl: "https://www.youtube.com/embed/di02TtfSzLw?autoplay=0&controls=1&wmode=transparent&rel=0&showinfo=1&autohide=1&modestbranding=1",
    review: "Easy Technology",
  },

  {
    id: 5,
    text: "With the Bruno MD6, I feel more in control of my health than ever before!",
    author: "Francis",
    authorImage: "Images/testimonialSlider5.png",
    videoUrl: "https://www.youtube.com/embed/MuJuWdG3jvI?autoplay=0&controls=1&wmode=transparent&rel=0&showinfo=1&autohide=1&modestbranding=1",
    review: "Accuracy Is Key",
  },

  {
    id: 6,
    text: "With the Bruno MD6, I feel more in control of my health than ever before!",
    author: "Jodi",
    authorImage: "Images/testimonialSlider6.png",
    videoUrl: "https://www.youtube.com/embed/SWN9dq1yeQM?autoplay=0&controls=1&wmode=transparent&rel=0&showinfo=1&autohide=1&modestbranding=1",
    review: "Managability",
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
                  <div className={styles.videoEmbed}>
                    <span className={styles.videoTag}>REAL STORIES : {testimonial.review}</span>
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
                      <div className={styles.quoteIcon}> <img src="Quoet-Svg.svg" /> </div>
                      <div><blockquote>
                        {testimonial.text}
                      </blockquote></div>
                    </div>
                    <div>




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



// <iframe data-conjure-edit-param="EmbedVideo,BlockResize,BlockRotate,BlockMove" style="overflow: hidden; display: inline;" width="100%" height="100%" frameborder="0" allowfullscreen="true" wmode="Opaque" src="https://www.youtube.com/embed/nkE3SBy9sJc?autoplay=0&amp;controls=1&amp;wmode=transparent&amp;rel=0&amp;showinfo=1&amp;autohide=1&amp;modestbranding=1"></iframe>
