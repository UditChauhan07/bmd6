



import React, { useState } from 'react';
import styles from "../FaqsTabing/index.module.css";

const FaqsTab = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <div className={styles.FaqtabMian}>
            <div className={styles.helpMain}>
                <div className={styles.helpdec}>
                    <p>Find quick answers to common questions about using the Bruno MD6. Need more details? Explore our frequent asked questions below:</p>
                </div>
            </div>

            <div className={styles.tabMian}>
                {/* <div>
                    <img src='svg/humanQuestion.svg' alt="FAQ Illustration" />
                </div> */}
                <div className={styles.Tabsection}>
                    <div className={styles.container}>
                        <div className={styles.tabs}>
                            <div onClick={() => setActiveTab("General")} className={`${styles.tab} ${activeTab === "General" ? styles.activeTab : ""}`}>General Inquiries</div>
                            <div onClick={() => setActiveTab("Blood Glucose")} className={`${styles.tab} ${activeTab === "Blood Glucose" ? styles.activeTab : ""}`}>Blood Glucose</div>
                            <div onClick={() => setActiveTab("Blood Ketone")} className={`${styles.tab} ${activeTab === "Blood Ketone" ? styles.activeTab : ""}`}>Blood Ketone</div>
                            <div onClick={() => setActiveTab("Customer support")} className={`${styles.tab} ${activeTab === "Customer support" ? styles.activeTab : ""}`}>Customer Care Support</div>

                        </div>

                        <div className={styles.content}>
                            {activeTab === "General" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(0)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>1</p>
                                                <p className={styles.accordionTitle}>I received this error: “Get Password Message” Invalid URL, “Registration Failed! ”Data Format Error!” (PPwd). What should I do?

                                                </p>

                                            </div>
                                            <div> <img src={openIndex === 0 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 0 ? styles.open : ""}`}><p>Follow this recommended password guideline:
                                            <ul>
                                                <li>Use only alphanumeric characters.</li>
                                            </ul>
                                            <ul>
                                                <li>Length: Minimum 8, maximum 20 characters.</li>
                                            </ul>
                                            <ul>
                                                <li>Include at least one lowercase letter.</li>
                                            </ul>
                                            <ul>
                                                <li>Include at least one number.</li>
                                            </ul>
                                        </p>
                                        </div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>2</p>
                                                <p className={styles.accordionTitle}>What does error 6 mean?</p>
                                            </div>
                                            <div> <img src={openIndex === 1 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 1 ? styles.open : ""}`}><p>Error Code: E-6 (or Error 6):

                                            <ul>
                                                <li>Meaning: Blood was applied to the test strip before the meter was ready (before
                                                    the flashing drop symbol appeared).</li>
                                            </ul>
                                            <ul>
                                                <li>Solution: Discard the test strip and repeat the test, ensuring you wait for the
                                                    flashing drop symbol before applying the sample.</li>
                                            </ul>
                                        </p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(2)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>3</p>
                                                <p className={styles.accordionTitle}>I received a code mismatch. What should I do?</p>
                                            </div>
                                            <div> <img src={openIndex === 2 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 2 ? styles.open : ""}`}><p>A code mismatch happens when the calibration process is not completed correctly.
                                            Please follow the steps outlined in this chart to resolve the issue.
                                        </p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(3)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>4</p>
                                                <p className={styles.accordionTitle}>Do I need to calibrate my device when measuring glucose levels?</p>
                                            </div>
                                            <div> <img src={openIndex === 3 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 3 ? styles.open : ""}`}><p>No, calibration is not required for glucose measurement.
                                        </p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(5)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>5</p>
                                                <p className={styles.accordionTitle}>Do I need a control solution to calibrate the meter?</p>
                                            </div>
                                            <div> <img src={openIndex === 5 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 5 ? styles.open : ""}`}><p>Control solution is not mandatory for calibration. This is why it is not included in your
                                            Bruno MD6 package. However, you must follow the calibration process each time you
                                            open a new box of ketone strips. A code strip, found inside the box, is necessary to
                                            calibrate your meter. For further assistance, watch this video:
                                        </p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(6)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>6</p>
                                                <p className={styles.accordionTitle}>Do I need to calibrate my meter when measuring ketone levels?</p>
                                            </div>
                                            <div> <img src={openIndex === 6 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 6 ? styles.open : ""}`}><p>Yes, calibration is required. You must calibrate your meter each time you start using
                                            a new box of β-Ketone test strips. Each box includes a unique code test strip (coding
                                            key) that must be used to calibrate the meter. When you finish a box of test strips,
                                            discard the old code test strip, and re-calibrate using the new one from the next box. <br /><b>For guidance, watch these video tutorials:</b>
                                            <ul>
                                                <li><b>Bruno MD6 - B Ketones & Calibration</b></li>
                                                <li><b>How to Code or Calibrate  –  </b> <a href="https://youtu.be/JtNbUJ3DnZA?si=XAj0Nzs8lWz0_VDA" target="_blank" >Watch Here</a></li>
                                            </ul>
                                            Or follow this <a href=''>step-by-step calibration process</a> (link to the visual chart).
                                        </p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(7)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>7</p>
                                                <p className={styles.accordionTitle}>How do I pair my device with the app using Bluetooth?</p>
                                            </div>
                                            <div> <img src={openIndex === 7 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 7 ? styles.open : ""}`}><p>Follow the steps below to download the Bruno MD6 app, create a new account
                                            (mandatory), and pair it with your monitoring system.
                                            <p><b>Important: </b> Ensure the Bruno MD6 monitoring system is turned off during the entire app
                                                setup and account creation process.</p>
                                            <br />
                                            <p><b>App Installation and Account Creation</b></p>
                                            <br />
                                            <p>1. <b>Go to the Samsung or Apple and </b>Store and search for &quot;Bruno MD6.&quot;</p>
                                            <p>2. <b>Tap the Bruno MD6 icon </b>Store and search for &icon and download the app.</p>
                                            <p>3. Once installed, tap the “OPEN” button.</p>
                                            <p>4. Tap <b>“Create New Account.”</b></p>
                                            <p>5. Fill in the required details:
                                                <ul>
                                                    <li><b>Account ID : </b>(e.g.,jmiller)</li>
                                                    <li><b>Password : </b>Create and confirm your password.</li>
                                                    <li><b>Email Address: </b>Enter a valid email address.</li>
                                                    <li><b>Birthday: </b>Input your date of birth.</li>
                                                    <li><b>Gender: </b>Select Male or Female.</li>
                                                    <li><b>First Name </b>and <b>Last Name: </b>Enter your details.</li>
                                                    <li><b>Type: </b>Choose “Type 1” or “Type 2” from the dropdown menu (a Keto Diet
                                                        option will be added in the next update).</li>


                                                </ul>
                                            </p>
                                            <p>6. Tap <b>“Register Account.”</b></p>

                                        </p>
                                            <br />
                                            <p><b>Pairing the Monitoring System</b></p>
                                            <br />
                                            <p>1. On the monitor, press and hold the left-side button with your thumb until the
                                                blue light at the top-left corner begins to flash.</p>
                                            <p>2. In the app, tap <b>“Pair Meter”</b> next to the “Meter” field (serial number).</p>
                                            <p>3. Select <b>“Add Available Meter”</b> when prompted and tap <b>“Add.”</b></p>
                                            <p>4. Return to the previous screen by tapping the arrow (&lt; Pair Bluetooth Smart
                                                Meter) at the top-left of your phone.</p>
                                            <p>5. Tap <b>“Pair Meter” </b>again. The serial number should now populate the blank field.</p>
                                            <p>6. If prompted, go back to the previous screen again (&lt; Pair Bluetooth Smart
                                                Meter).</p>
                                            <p>7. Tap <b>“Register Meter.”</b>
                                                Once paired, the app will begin importing your data if you’ve already measured your
                                                ketones or glucose levels.</p>
                                            <br />
                                            <p><b>Viewing Data and Trends</b></p>
                                            <br />
                                            <p>1. At the bottom of the app screen, tap the <b>“Data”</b> icon to confirm if your data has
                                                been imported.</p>
                                            <p>2. Tap <b>“Analysis”</b> to review your blood glucose and ketone levels through pie
                                                charts and trend graphs.</p>
                                            <br />
                                            <p><b>Setting Health Targets</b></p>
                                            <br />
                                            <p>1. Tap the <b>“Settings” </b>icon at the bottom of the screen.</p>
                                            <p>2. Select <b>“Health Target.”</b></p>
                                            <p>3. Set your goals for:
                                                <ul><li><b>Glucose Levels:
                                                    <ul><li>Before meals: Full Carrot icon.</li>
                                                        <li>Before meals: Full Carrot icon.</li></ul></b></li>
                                                    <li><p><b>Ketones:</b> The current maximum selectable level is 1.9 mmol/L, but an
                                                        update will increase this to match the monitor’s capability of up to 8
                                                        mmol/L.</p> </li></ul>
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            )}
                            {activeTab === "General" && (
                                <div className={styles.accordion2}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(8)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>8</p>
                                                <p className={styles.accordionTitle}>Why are my blood glucose readings never the same in two consecutive
                                                    measurements or when compared to lab results?</p>
                                            </div>
                                            <div> <img src={openIndex === 8 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 8 ? styles.open : ""}`}><p>Blood glucose readings can vary due to multiple factors. The first blood drop often
                                            contains more cellular debris, which may affect accuracy. Testing with the second drop
                                            typically provides more reliable results. If different drops are used for different meters,
                                            discrepancies may occur. Additionally, the FDA allows a variance of +/- 15% for home
                                            meters compared to lab results due to these natural fluctuations.</p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(9)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>9</p>
                                                <p className={styles.accordionTitle}>Can I use the same strip when testing my glucose and ketone level?</p>
                                            </div>
                                            <div> <img src={openIndex === 9 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 9 ? styles.open : ""}`}><p>No. You cannot use the same test strip, and glucose and ketone strips must be
                                            purchased separately.</p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(10)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>10</p>
                                                <p className={styles.accordionTitle}>I previously registered and created an account, but I do not remember my
                                                    user account anymore. What should I do?</p>
                                            </div>
                                            <div> <img src={openIndex === 10 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 10 ? styles.open : ""}`}><p>Feel free to email us at <a href='customercare@brunopharma.cm'>customercare@brunopharma.cm</a>, we will be more than
                                            happy to guide you on resetting your user account.</p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(11)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>11</p>
                                                <p className={styles.accordionTitle}>If someone registers the meter under an account; is that the only account that
                                                    meter can ever registered to? It would be good to be able to register the device to
                                                    multiple accounts because you could have two users and they could have
                                                    separate accounts. That way if two people, say my wife and I, could use the
                                                    device and have only our personal readings.</p>
                                            </div>
                                            <div> <img src={openIndex === 11 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 11 ? styles.open : ""}`}><p>Unfortunately, FDA and HIPAA only allow one user per meter. In other words,
                                            meters cannot be shared because readings from one Customer/Patient are considered
                                            by FDA and HIPAA as confidential Electronic Medical/Health Records. Our APP and
                                            Cloud are HIPAA Compliant.</p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(12)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>12</p>
                                                <p className={styles.accordionTitle}>Is the Bruno MD6 FDA cleared?.</p>
                                            </div>
                                            <div> <img src={openIndex === 12 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 12 ? styles.open : ""}`}><p>The Bruno MD6 monitoring system is FDA cleared.</p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(13)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>13</p>
                                                <p className={styles.accordionTitle}>What technology is the Bruno MD6 made with?</p>
                                            </div>
                                            <div> <img src={openIndex === 13 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 13 ? styles.open : ""}`}><p>The Bruno MD6 monitoring system along with the ketone strips have been created
                                            with an advanced, revolutionary, patented technology that provides accurate readings.
                                            The Bruno MD6 glucose strip has 2-Well Technology with 2 enzymes on the strips to
                                            get HCT value and glucose value. The HCT value is determined and used to
                                            compensate and correct for glucose value for a fast and accurate test.
                                            In other words, HCT value differs in different patients with gestational diabetes, dialysis
                                            etc. and its value will affect the glucose value in the individual. So, with HCT value
                                            determined, accurate glucose level can be determined. The Bruno MD6 ketone strip has
                                            a live enzyme called Hydroxybutyrate Dehydrogenase. This enzyme catalyzes the
                                            chemical reaction of BoHB, and acetoacetate. As you may know in order to receive an
                                            exact ketone testing accuracy glucose, your blood level has to show not only how much
                                            acetoacetate is in your system, but also how much BoHB is in your system. BoHB is
                                            commonly called D-B-hidroxybutyrate and it is the important ketone body that your body
                                            converts to fuel the brain and muscles providing extreme accuracy to your testing
                                            results.</p></div>
                                    </div>


                                </div>
                            )}

                            {activeTab === "Blood Glucose" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(0)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>001</p>
                                                <p className={styles.accordionTitle}>Customer support</p>

                                            </div>
                                            <div> <img src={openIndex === 0 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 0 ? styles.open : ""}`}>To change your payment method, log in to your account.</div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>002</p>
                                                <p className={styles.accordionTitle}>Cancellation and Return</p>
                                            </div>
                                            <div> <img src={openIndex === 1 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 1 ? styles.open : ""}`}>Shipping details and delivery times.</div>
                                    </div>


                                </div>

                            )}
                            {activeTab === "Blood Glucose" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(3)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>003</p>
                                                <p className={styles.accordionTitle}>Customer support</p>

                                            </div>
                                            <div> <img src={openIndex === 0 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 3 ? styles.open : ""}`}>To change your payment method, log in to your account.</div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(4)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>004</p>
                                                <p className={styles.accordionTitle}>Cancellation and Return</p>
                                            </div>
                                            <div> <img src={openIndex === 4 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 4 ? styles.open : ""}`}>Shipping details and delivery times.</div>
                                    </div>


                                </div>

                            )}

                            {activeTab === "Blood Ketone" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(0)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>1</p>
                                                <p className={styles.accordionTitle}>Should I monitor my glucose levels while following a keto diet?</p>

                                            </div>
                                            <div> <img src={openIndex === 0 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 0 ? styles.open : ""}`}><p>Yes, tracking your blood glucose can help you optimize your diet for maximum
                                            weight loss and better results on keto.
                                        </p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>2</p>
                                                <p className={styles.accordionTitle}>What are the recommended blood ketone levels for a keto diet?</p>
                                            </div>
                                            <div> <img src={openIndex === 1 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 1 ? styles.open : ""}`}><p>Monitoring blood ketone levels is crucial for optimizing a ketogenic diet. The ideal
                                            range varies based on individual goals:
                                        </p>
                                            <ul>
                                                <li><b>Nutritional ketosis (general ketosis):</b> 0.5–1.5 mmol/L</li>
                                                <li><b>Optimal fat-burning range:</b>1.5–3.0 mmol/L</li>
                                                <li><b>Therapeutic ketosis (for medical or neurological benefits):</b> 3.0–5.0 mmol/L</li>
                                            </ul>
                                            <p>Ketone levels may fluctuate based on diet, activity level, and individual insulin
                                                sensitivity. Regular monitoring helps you fine-tune your diet for the best results.</p>
                                        </div>
                                    </div>


                                </div>

                            )}
                            {activeTab === "Blood Ketone" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(3)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>3</p>
                                                <p className={styles.accordionTitle}>What are the suggested blood glucose level while on a keto diet?</p>

                                            </div>
                                            <div> <img src={openIndex === 0 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 3 ? styles.open : ""}`}><p>The suggested blood glucose level while on a keto diet typically ranges between <b>65-
                                            90 mg/dL (3.9-5.0 mmol/L)</b> when fasting. Some individuals in deep ketosis may have
                                            slightly lower readings, around <b>60-80 mg/dL (3.3-4.4 mmol/L).</b> However, glucose levels
                                            can fluctuate based on diet, activity level, and individual metabolism.</p></div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(4)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>4</p>
                                                <p className={styles.accordionTitle}>Who Can Follow a Keto Diet?</p>
                                            </div>
                                            <div> <img src={openIndex === 4 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 4 ? styles.open : ""}`}><p>A keto diet (ketogenic diet) is generally suitable for most healthy individuals but may
                                            not be ideal for everyone. Here’s a breakdown of who <b>can</b> and <b>should be cautious</b>
                                            when considering a keto diet:</p>
                                            <p><b>Healthy adults looking to lose weight – </b>Keto is effective for fat loss by promoting
                                                ketosis, where the body burns fat for energy.</p>
                                            <p><b>People with type 2 diabetes – </b>It may help regulate blood sugar and insulin levels, but
                                                should be done under medical supervision.</p>
                                            <p><b>Individuals with metabolic syndrome – </b>Keto can improve markers like blood
                                                pressure, triglycerides, and HDL cholesterol.</p>

                                            <p><b>Athletes (especially endurance athletes) – </b>Some adapt well to using fat as fuel,though performance may initially dip.</p>
                                            <p><b>People with epilepsy – </b>Originally designed to help reduce seizures, especially in
                                                children who don’t respond to medications.</p>
                                        </div>
                                    </div>


                                </div>

                            )}

                            {activeTab === "Customer support" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(0)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>001</p>
                                                <p className={styles.accordionTitle}>Customer support</p>

                                            </div>
                                            <div> <img src={openIndex === 0 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 0 ? styles.open : ""}`}>To change your payment method, log in to your account.</div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>002</p>
                                                <p className={styles.accordionTitle}>Cancellation and Return</p>
                                            </div>
                                            <div> <img src={openIndex === 1 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 1 ? styles.open : ""}`}>Shipping details and delivery times.</div>
                                    </div>


                                </div>

                            )}
                            {activeTab === "Customer support" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(3)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>003</p>
                                                <p className={styles.accordionTitle}>Customer support</p>

                                            </div>
                                            <div> <img src={openIndex === 0 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 3 ? styles.open : ""}`}>To change your payment method, log in to your account.</div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(4)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>004</p>
                                                <p className={styles.accordionTitle}>Cancellation and Return</p>
                                            </div>
                                            <div> <img src={openIndex === 4 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 4 ? styles.open : ""}`}>Shipping details and delivery times.</div>
                                    </div>


                                </div>

                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqsTab;
