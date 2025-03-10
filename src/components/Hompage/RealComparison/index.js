import React from "react";
import styles from "./styles.module.css";
const RealComparison = () => {
  return (
    <div className={styles.comparisonSection}>
      {/* Shipping Notice */}
      {/* <div className={styles.shippingNotice}>
        <div className={styles.shippingInner}>
          <div>
            <h5>Orders only available to ship to US addresses.</h5>
            
            <p >
              Applicable sales tax will be applied to orders shipped to{" "}
              <strong>Florida and California</strong>.
            </p>
          </div>

<div className={styles.verticalLine}></div>

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
      </div> */}

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
          <div className={styles.ComparflexInner}>
       
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
              <td className={`${styles.listDot} ${styles.list}`}><h3>Blood Ketone & Glucose Monitoring System</h3></td>
              <td className={`${styles.listTick} ${styles.listSmall}`}><p>Yes</p></td>
              <td className={`${styles.listCross} ${styles.listSmall}`} ><p>Most measure only one</p></td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}><h3>Fast Testing Time</h3></td>
              <td className={`${styles.listTick} ${styles.listSmall}`} > <p>5-10 seconds</p></td>
              <td className={`${styles.listCross} ${styles.listSmall}`}> <p>Often slower</p></td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}><h3>Minimal Blood Sample</h3></td>
              <td className={`${styles.listTick} ${styles.listSmall}`}><p> 0.5μL</p></td>
              <td className={`${styles.listCross} ${styles.listSmall}`}> <p>Usually 1.0μL or more</p></td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}><h3>High Accuracy with Advanced 5 Electrodes Technology</h3></td>
              <td className={`${styles.listTick} ${styles.listSmall}`}> <p>Yes</p></td>
              <td className={`${styles.listCross} ${styles.listSmall}`}> <p>Less reliable in some cases</p></td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}><h3>Cost-Effective Test Strips</h3></td>
              <td className={`${styles.listTick} ${styles.listSmall}`}> <p>Affordable</p></td>
              <td className={`${styles.listCross} ${styles.listSmall}`}> <p>Often expensive</p></td>
            </tr>

            <tr>
              <td className={`${styles.listDot} ${styles.list}`}><h3>Easy-to-Use Interface</h3></td>
              <td className={`${styles.listTick} ${styles.listSmall}`}> <p>Large screen, simple buttons</p></td>
              <td className={`${styles.listCross} ${styles.listSmall}`} ><p> Complicated for beginners</p></td>
            </tr>
          </tbody>
        </table>
        </div>
           

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
