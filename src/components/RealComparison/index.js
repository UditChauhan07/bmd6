import React from "react";
import styles from "./styles.module.css";
const RealComparison = () => {
  return (
    <div className={styles.comparisonSection}>
      {/* Shipping Notice */}
      <div className={styles.shippingNotice}>
        <div className={styles.shippingInner}>
          <div>
            <h5>Orders only available to ship to US addresses.</h5>
            <p >
              Applicable sales tax will be applied to orders shipped to{" "}
              <strong>Florida and California</strong>.
            </p>
          </div>
          <div className={styles.whether}>
            <div className={styles.whetherImg}>
              <img src="./weather.png" />
              <p>February 21st, 2025</p>
            </div>

            <div className={styles.whecontrol}>
              <p className={styles.time}> 09:37 </p>
              <p className={styles.timePro}  ><span className={styles.timeEst}>EST</span> <span className={styles.timePM}>PM</span></p>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.compariPage}>
          <h5 className={styles.headingPrimary}>Real Comparison</h5>
          <h1 className={styles.headingMain}>Bruno MD6 Versus Other Monitoring Systems</h1>
          <p className={styles.description}>
            We believe good health should be a right for everyone, regardless of ethnicity, age, gender, or location. Below is the basic{" "}
            <strong>comparison of MD6 with other systems.</strong>
          </p>
        </div>

        {/* Comparison Table */}
        <div className={styles.comparisonContainer}>
          <div className={styles.Comparflex}>
            {/* MD6 Column */}

            

            <table class={styles.comparisonTable}>
          <thead>
            <tr>
              <th width="45%"></th>
              <th width="27%" height="42px"><img src="./md6 logo.png"/></th>
              <th className={styles.OtherFontStyle} width="27%"> others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.listDot} ${styles.list}`}>Blood Ketone & Glucose Monitoring System</td>
              <td className={`${styles.listTick} ${styles.listSmall}`}>Yes</td>
              <td className={`${styles.listCross} ${styles.listSmall}`} >Most measure only one</td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}>Fast Testing Time</td>
              <td className={`${styles.listTick} ${styles.listSmall}`} > 5-10 seconds</td>
              <td className={`${styles.listCross} ${styles.listSmall}`}> Often slower</td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}>Minimal Blood Sample</td>
              <td className={`${styles.listTick} ${styles.listSmall}`}> 0.5μL</td>
              <td className={`${styles.listCross} ${styles.listSmall}`}> Usually 1.0μL or more</td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}>High Accuracy with Advanced 5 Electrodes Technology</td>
              <td className={`${styles.listTick} ${styles.listSmall}`}> Yes</td>
              <td className={`${styles.listCross} ${styles.listSmall}`}> Less reliable in some cases</td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}>Cost-Effective Test Strips</td>
              <td className={`${styles.listTick} ${styles.listSmall}`}> Affordable</td>
              <td className={`${styles.listCross} ${styles.listSmall}`}> Often expensive</td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}>Easy-to-Use Interface</td>
              <td className={`${styles.listTick} ${styles.listSmall}`}> Large screen, simple buttons</td>
              <td className={`${styles.listCross} ${styles.listSmall}`} > Complicated for beginners</td>
            </tr>
          </tbody>
        </table>

           

            {/* Image Column */}
            <div className={styles.GlucoImg}>
              <img
                src="./GlucometerImg.png"
                alt="Bruno MD6 Device"
                className={styles.image}
              />
            </div>
          </div>
        </div>

       

      </div>
    </div>


  );
};

export default RealComparison;
