import React from "react";
import styles from "./styles.module.css"; 

function BloodVsUrineTesting() {
  return (
    <div className={styles.container}>
        <div className={styles.DiffBene}>
      {/* Left Section: Title & Image */}
      <div className={styles.leftSection}>
        <h2 className={styles.subheading}>BLOOD VS. URINE TESTING</h2>
        <h1 className={styles.title}>Differences & Benefits</h1>
        <img
          src="/BloodvsUrine.png"
          alt="Blood Molecule"
          className={styles.mainImage}
        />
      </div>

      {/* Right Section: Comparison */}
      <div className={styles.rightSection}>

        <div className={styles.KetoTesting}>

        <div className={styles.headerCard}>
          <h2>
            <span className={styles.blueText}>Blood vs. Urine</span> Ketone
            Testing: Which One is More Accurate?
          </h2>
          <p>
            A Comparison of Ketone Urine Sticks and Blood Strips to Understand
            Their Differences and Benefits.
          </p>
        </div>

        <div className={styles.vsContainer}>
          <div className={styles.vsCircle}>VS <span> <img src="./Black-arrow.svg"/> </span></div>
        </div>

        </div>

        {/* Comparison Cards */}
        <div className={styles.comparison}>
          {/* Urine Test Card */}
          <div className={styles.card}>
            <img src="" alt="Ketone Urine Sticks" className={styles.icon} />
            <h3>Ketone Urine Sticks</h3>
            <p className={styles.redText}>✖ They do not report the amount of ketones in the blood.</p>
            <p className={styles.redText}>
              ✖ They will not provide accuracy.
            </p>
            <p className={styles.excludes}>Excludes <strong>D-β-hydroxybutyrate</strong></p>
          </div>

          {/* Blood Test Card */}
          <div className={styles.card}>
            <img src="" alt="Ketone Blood Strips" className={styles.icon} />
            <h3>Ketone Blood Strips</h3>
            <p className={styles.greenText}>
              ✔ They show an exact and real-time microscopic view of ketones in your blood.
            </p>
            <p className={styles.greenText}>
              ✔ You will discover how much BoHB (D-B-hydroxybutyrate) is in your system.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default BloodVsUrineTesting;
