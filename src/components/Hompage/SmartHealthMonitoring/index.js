import React from "react";
import { FaHandSparkles, FaTachometerAlt, FaMobileAlt } from "react-icons/fa";
import styles from "./style.module.css"; // Import module CSS

const SmartHealthMonitoring = () => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h4 className={styles.subheading}>Get Started Today!</h4>
        <h2 className={styles.heading}>Smart Health Monitoring</h2>
        <p className={styles.description}>
          Solutions Designed Just for You. Take control of your health with the Bruno MD6 Blood
          Ketone & Glucose Monitoring System. Track your levels with precision and make informed
          decisions for better metabolic health.
        </p>
      </div>
      
      {/* Right Section - Features */}
      <div className={styles.rightSection}>
        <div className={styles.feature}>
          <img src="EasyUse.svg" className={styles.icon} />
          <span className={styles.featureText}>Easy to Use</span>
        </div>
        <div className={styles.feature}>
        <img src="Fast&accurate.svg" className={styles.icon} />

          <span className={styles.featureText}>Fast & Accurate Results</span>
        </div>
        <div className={styles.feature}>
        <img src="SupportHealth.svg" className={styles.icon} />

          <span className={styles.featureText}>Supports Your Health Goals</span>
        </div>
      </div>
    </div>
  );
};

export default SmartHealthMonitoring;