import React from "react";
import styles from "./styles.module.css"; // Import CSS Module

function WhyChoose() {
  return (
    <div className={styles.ChoosTop}>

      <div className={styles.container}>

        <div className={styles.mainChoose}>

          <div className={styles.mainChoose1}>
            <div className={styles.header}>
              <div className={styles.tag}><div><img src="svg/Bluedot.svg"/></div><p>Track with Precision.</p></div>
              <div className={styles.tag}><div><img src="svg/Bluedot.svg"/></div><p> Health, Simplified.</p></div>
            </div>

            {/* Main Section */}
            <section className={styles.productInfo1}>
              <h1>
                Why Choose <br></br><span className={styles.highlight}>BrunoMD6*</span>
              </h1>
              <h2>Results in Seconds.</h2>
              <div className={styles.mainBru6}>
                <div className={styles.GeneImg}>
                  <img src="Images/sport-yoga.png" alt="sport-yoga" />
                </div>

                <div className={styles.mainBrunoContent}>
                  <p>
                    Bruno MD6 is designed for individuals committed to ketogenic health, diabetes management, and metabolic optimization.
                  </p>
                  <div className={styles.AmazonImg}>
                    <img src="AmazonOrder.svg" alt="Amazon" />
                  </div>
                
                </div>
               
              </div>
              <div className={styles.AmazonImg1}>
                    <img src="AmazonOrder.svg" alt="Amazon" />
                  </div>
              {/* Stats */}
              <div className={styles.stats}>
                <div className={styles.statsInner}>
                  <span className={styles.statsBold}>98% </span>
                  <span className={styles.statsPara}>Accuracy</span>
                </div>

                <div className={styles.statsInner}>
                  <span className={styles.statsBold}>&lt;5 sec </span>
                  <span className={styles.statsPara}>Results</span>
                </div>

                <div className={styles.statsInner}>
                  <span className={styles.statsBold}>1+ million </span>
                  <span className={styles.statsPara}>Readings Saved</span>
                </div>


              </div>
            </section>

          </div>


          <div className={styles.mainChoose2}>

            <div className={styles.FastAcc}>
              <img src="FastAcc.png" />

            </div>







          </div>
        </div>
      </div>

    </div>
  );
}

export default WhyChoose;
