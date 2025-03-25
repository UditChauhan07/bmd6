import React from "react";
import styles from "./styles.module.css"; 

function BloodVsUrineTesting() {
  return (

    <div className={styles.MainBgCool}>
    <div className={styles.container}>
        <div className={styles.DiffBene}>
      {/* Left Section: Title & Image */}
      <div className={styles.leftSection}>
        
        <h2 className={styles.subheading}> 
        BLOOD VS. URINE TESTING</h2>
        <h1 className={styles.title}>Differences & Benefits</h1>
        <img
          src="Images/girl-excercising.png"
          alt="girl-excercising"
          className={styles.mainImage}
        />
      </div>

      {/* Right Section: Comparison */}
      <div className={styles.rightSection}>

        <div className={styles.KetoTesting}>

        <div className={styles.headerCard}>
<div><span> <img src="testTube.svg"/>
</span></div>
            <div>
          <h2>
            <span className={styles.blueText}>  Blood vs. Urine</span> Ketone
            Testing: Which One is More Accurate?
          </h2>
          <p>
            A Comparison of Ketone Urine Sticks and Blood Strips to Understand
            Their Differences and Benefits.
          </p>
          </div>
        </div>

        <div className={styles.vsContainer}>
          <div className={styles.vsCircle}>VS <span> <img src="./Black-arrow.svg"/> </span></div>
        </div>

        </div>

        {/* Comparison Cards */}
        <div className={styles.comparison}>
          {/* Urine Test Card */}
          <div className={styles.card}>
          <div className={styles.kitonFlex}>
            <img src="/KitoneUrine.png" alt="Ketone Urine Sticks" className={styles.icon} />
            <h3>Ketone Urine Sticks</h3>
            </div>
            <p className={styles.redText}>
            <span><img src="CrossSimple.svg "/></span>&nbsp;
                They will not report the amount of ketones in the blood, but it will limit to show the increased amounts of ketones in the urine(acetoacetate), not the presence of D- ẞ- hydroxybutyrate.</p>
            <p className={styles.redText}>
            <span><img src="CrossSimple.svg "/></span>&nbsp;
               They will not provide accuracy.
            </p>
            <p className={styles.excludes}>Excludes 
                <br></br><strong>D-β-hydroxybutyrate</strong></p>
          </div>
          <div className={styles.vsContainer1}>
          <div className={styles.vsCircle}>VS <span> <img src="./Black-arrow.svg"/> </span></div>
        </div>
          {/* Blood Test Card */}
          <div className={styles.card}>
            <div className={styles.kitonFlex}>
            <img src="BloodStrip.png" alt="Ketone Blood Strips" className={styles.icon} />
            <h3>Ketone Blood Strips</h3>
            </div>
            <p className={styles.greenText}>
                <span><img src="TickSimple.svg "/></span>&nbsp;
            They show an exact and realtime microscopic view of the makeup of the ketones in your blood. You will not only know how much acetoacetate is in your system, but you will discover how much BoHB is in your system, also known as D-B-hydroxybutyrate, which is the important ketone body that your body converts to fuel the muscles and brain.
            </p>
            <p className={styles.greenText}>
            <span><img src="TickSimple.svg "/></span>&nbsp;
              You will discover how much BoHB (D-B-hydroxybutyrate) is in your system.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default BloodVsUrineTesting;
