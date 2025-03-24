import React from "react";
import styles from "./style.module.css"

const WellnessInfo = () => {
  return (
    <div className={styles.wellnessContainer}>
      {/* Left Section */}

<div className={styles.mainRun}>
      <div className={styles.leftSection}>
        <span className={styles.tag}><span></span> Precision for Wellness</span>
        <h1>Who Is This For? Find the Perfect Fit For Your Needs</h1>
        <p>Solutions Designed Just for You</p>
        <button className={styles.amazonBtn}>
          <img src="AmazonOrder.svg"/>
          {/* ORDER NOW AT <span className={styles.amazonLogo}>amazon</span> → */}
        </button>
      </div>

        <div className={styles.RunninWoman}>
        <img
          src="Running-Woman.png"
          alt="Running Woman"
          className={styles.featureImage}
        />
        </div>
        <div className={styles.RunninWomanMob}>
        <img
          src="Images/RunninWomanmob.png"
          alt="Running Woman"
          className={styles.featureImage}
        />
        </div>

        </div>
      {/* Right Section (Image & Features) */}
     

        <div className={styles.features}>
          <h2>Bruno MD6: The Ideal Choice for Your Health & Wellness for</h2>
          <ul>
            <li>
              <span><img src="ThreeDotsIMg.svg"/></span>
              <div>
               <h4>Keto Enthusiasts & Biohackers</h4>
              <p>Optimize ketosis for fat burning and mental clarity.</p>
              </div>
            </li>
            <li>
              <span><img src="ThreeDotsIMg.svg"/></span>
              <div> <h4>Diabetics & Pre-Diabetics</h4>
              <p>Monitor glucose levels accurately.</p>
              </div>
            </li>
            <li>
              <span> <img src="ThreeDotsIMg.svg"/></span>
              <div>
               <h4>Intermittent Fasters</h4>
              <p>Track metabolic changes over time.</p>
              </div>
            </li>

            <li>
              <span> <img src="ThreeDotsIMg.svg"/> </span>
              <div>
               <h4>Athletes & Performance Seekers</h4>
              <p>Track metabolic changes over time.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default WellnessInfo;
