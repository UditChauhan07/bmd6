import React from "react";
import styles from "./styles.module.css";
import Slider from "./Slider";
import Slider2 from "./slider2"

const Index = () => {
   
  
  return (
    <div className={styles.MainWorko}>
    <div className={styles.container}>
      <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12  ">
          <h5>How it Works</h5>
          <h2>Precision with 5-Electrode Tech</h2>
          <p>
            The Bruno MD6 delivers incredible accuracy by using a 5-electrode
            technology to provide plasma-calibrated readings. With just a small
            spec of blood needed, readings can be done in just 5 seconds.
          </p>
          <div className={styles.HowItWorkSlider}>
            <Slider></Slider>

            <div className={styles.AmazonImg}>
            <a href='https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true' target='blank'>
              <img src="/AmazonOrder.svg" alt="Amazon" /></a>
            </div>

          <div>
    
    </div>

          </div>
        </div>


        <div className={`${styles.ContentContr} col-xl-7 col-lg-6 col-md-12 col-sm-12 `}>
        <Slider2></Slider2>
        <div>
        <img src="Images/portable&insurance.png"/>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Index;
