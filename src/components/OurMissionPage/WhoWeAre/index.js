import React from 'react'
import styles from '../WhoWeAre/index.module.css'

const index = () => {
  return (
    <div className={styles.whoweareMain}>
      <div className={styles.missionImg}>
        <img src='Images/missionImg.png' />
      </div>
      <div className={styles.content}>
        <h1>Who We Are</h1>
        <p>With 27 years of experience in the pharmaceutical industry, we are a multinational
          company committed to delivering medical-grade precision. The Bruno MD6
          Multifunctional Monitoring System is the same advanced device trusted by doctors&#39;
          offices, hospitals, and clinics—designed to meet near-laboratory accuracy standards.</p>
        <p>Our customers rely on precise blood glucose testing, where even the slightest
          inaccuracy can pose serious health risks. The Bruno MD6 ensures life-changing health
          benefits by providing highly accurate blood testing for both ketones and glucose,
          empowering patients with reliable data for better health management.</p>
      </div>

    </div>
  )
}

export default index
