import React from "react";
import styles from "./styles.module.css";

const comparisonData = [
  {
    feature: "Blood Ketone & Glucose Monitoring System",
    bmd6: "Yes",
    others: "Most measure only one",
  },
  {
    feature: "Fast Testing Time",
    bmd6: "5-10 seconds",
    others: "Often slower",
  },
  {
    feature: "Minimal Blood Sample",
    bmd6: "0.5μL",
    others: "Usually 1.0μL or more",
  },
  {
    feature: "High Accuracy with Advanced 5 Electrodes Technology",
    bmd6: "Yes",
    others: "Less reliable in some cases",
  },
  {
    feature: "Cost-Effective Test Strips",
    bmd6: "Affordable",
    others: "Often expensive",
  },
  {
    feature: "Easy-to-Use Interface",
    bmd6: "Large screen, simple buttons",
    others: "Complicated for beginners",
  },
];

const RealComparison = () => {
  return (
    <div className={styles.comparisonSection}>
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
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th width="45%"></th>
                    <th width="27%"><img src="Images/bmd6Logo.svg" alt="BMD6 Logo" /></th>
                    <th className={styles.OtherFontStyle} width="27%">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className={`${styles.listDot} ${styles.list}`}><ul><li><h3>{item.feature}</h3></li></ul></td>
                      <td className={`${styles.listTick} ${styles.listSmall}`}><p>{item.bmd6}</p></td>
                      <td className={`${styles.listCross} ${styles.listSmall}`}><p>{item.others}</p></td>
                    </tr>
                  ))}
                </tbody>
              </table>


              <div className={styles.mobileView}>

                <div className={styles.mobileGrid}>
                  {comparisonData.map((item, index) => (
                    <div key={index} className={styles.gridItem}>

                      <div className={`${styles.listDot} ${styles.list}`}><h3><ul><li>{item.feature}</li></ul></h3></div>
                    </div>
                  ))}
                </div>

                <div className={styles.mobileGrid}>
                  <div className={styles.MobileBrunoImg}><img src="Images/bmd6Logo.svg" alt="BMD6 Logo" /></div>
                  {comparisonData.map((item, index) => (
                    <div key={index} className={styles.gridItem}>



                      <div className={`${styles.listTick} ${styles.listSmall}`}>
                        <p>{item.bmd6}</p>
                      </div>



                    </div>
                  ))}
                </div>


                <div className={styles.mobileGrid}>
                  <h6 className={styles.OtherFontStyle} width="27%">Others</h6>
                  {comparisonData.map((item, index) => (
                    <div key={index} className={styles.gridItem}>


                      <div className={styles.othersValue}>
                        <div className={`${styles.listCross} ${styles.listSmall}`}><p>{item.others}</p></div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
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
