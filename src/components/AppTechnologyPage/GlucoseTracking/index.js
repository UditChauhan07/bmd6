import React from 'react'
import styles from '../GlucoseTracking/styles.module.css'

const index = () => {
  return (
    <section>
      <div className={styles.featuresMain}>
        <div className={styles.featuresdiv}>
          <p>KEY FEATURES</p>
          <h2>Comprehensive Glucose & Ketone Tracking</h2>
          <div className={styles.RecorMain}>
          <div className={styles.container}>
      <div className={styles.cardDark}>
        <h2>Data Recording</h2>
        <p>Log your blood glucose and ketone measurements along with daily activities.</p>
        <strong>Color-coded results:</strong>
        <div className={styles.colors}>
          <div className={styles.colorItem}>
          <p>Red (high),</p>
            <div className={styles.red}></div> 
          </div>
          <div className={styles.colorItem}>
          <p>Green (normal),</p>
            <div className={styles.green}></div>
          </div>
          <div className={styles.colorItem}>
          <p>Yellow (low),</p>
            <div className={styles.yellow}></div>
             
          </div>
        </div>
      </div>
      <div className={styles.cardLight}>
        <div className={styles.logbook}>
          <h2>Record List & Logbook</h2>
          <ul>
            <li>View results by time and date for quick reference.</li>
            <li>Weekly logbook display categorizes readings into AC, PC, night, and sleep cycles.</li>
          </ul>
        </div>
        <div className={styles.diary}>
          <h2>Diary, Insights & Trend Graphs</h2>
          <ul>
            <li>Interactive charts reveal glucose, ketone, and activity patterns on a single graph.</li>
            <li>Track insulin, medication, activity, and diet effects with 24-hour glucose graphs.</li>
          </ul>
        </div>
      </div>
    </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default index
