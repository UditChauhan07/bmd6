import React from 'react'
import styles from '../DiabetesManager/styles.module.css'
import { PieChart, Pie, Cell, Tooltip } from "recharts";
const index = () => {
    const data = [
        { name: "Team sales", value: 63, color: "#2382BC" }, 
        { name: "My sales", value: 25, color: "#6AD2FF" }, 
        { name: "Remaining", value: 12, color: "#EFF4FB" }, 
    ];
    return (
        <div className={styles.MainSection}>
            <div className={styles.LeftSection}>
                <h2>Bruno MD6 - Diabetes & Ketone Manager App Take control of your diabetes and ketone management</h2>
                <div className={styles.amzoneBtn}>
                <a href='https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true' target='blank'>
                <img src="/AmazonOrder.svg" alt="Amazon" /></a>
                </div>
                <div className={styles.Decription}>
                    <text>A powerful and intuitive app designed to simplify your daily routine. With advanced mobile technology, a sleek user interface, and comprehensive data management tools, Bruno MD6 helps you monitor, track, and understand your blood glucose and ketone levels effortlessly.</text>
                </div>
                <div className={styles.MarqueeDiv}>
                    <div>
                        <p>Data Recording</p>
                        <p>Record List & Logbook</p>
                        <p>Diary, Insights</p>
                        <p>Trend Graphs</p>
                    </div>
                </div>
            </div>





            {/* RightSection Start */}
            <div className={styles.RightSection}>
                <div className={styles.firstSrction}>
                    <div className={styles.content}>
                        <div className={styles.Data}>
                            <h2>Smarter Diabetes & Ketone Tracking, Better Insights</h2>
                            <p>Bruno MD6 empowers you to visualize your diabetes and ketone data through:</p>
                            <text><b>Export & Share – </b>Send data to MD6 TeleHealth for your doctor, caregiver, or family.</text>
                        </div>
                    </div>
                </div>
                <div className={styles.secondSection}>
                    <div className={styles.graphContents}>
                        <div className={styles.Part}>
                            <div className={styles.Header}><img src='svg/check-fill.svg' alt='' />
                                <p>Trend Graphs</p>

                            </div>
                            <p className={styles.dec}>Track blood glucose & ketone fluctuations over <b>7, 14, and 30-day </b> periods.</p>

                        </div>
                        <div className={styles.Part2}>
                            <div className={styles.Header}><img src='svg/check-fill.svg' alt='' />
                                <p>Interactive Logs & Records</p>

                            </div>
                            <p className={styles.dec}>Track activities, food, and medication for a holistic health view.</p>

                        </div>
                        <div className={styles.Part3}>
                            <div className={styles.Header}><img src='svg/check-fill.svg' alt='' />
                                <p>Extensive FAQ Database</p>

                            </div>
                            <p className={styles.dec}>Learn about meds, nutrition, exercise, and lifestyle for better diabetes control.</p>

                        </div>
                    </div>
                    <div className={styles.chartContainer}>
                        <h2 className={styles.chartTitle}>Target Pie Charts</h2>
                        <p className={styles.chartSubtitle}>
                            Assess how well you’re managing your glucose and ketone levels
                        </p>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <PieChart width={220} height={220}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270} 
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>

                            {/* Custom Legend */}
                            <div className={styles.legendContainer}>
                                <div className={styles.legendItem}>
                                    <span className={`${styles.legendDot} ${styles.glucose}`}></span>
                                    <span style={{ color: "#6D7F9B" }}>Glucose</span>
                                    <strong>63%</strong>
                                </div>
                                <div className={styles.legendItem}>
                                    <span className={`${styles.legendDot} ${styles.ketone}`}></span>
                                    <span style={{ color: "#6D7F9B" }}>Ketone</span>
                                    <strong>24%</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
