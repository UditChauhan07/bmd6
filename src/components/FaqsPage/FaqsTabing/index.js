// import React, { useState } from 'react';
// import styles from "../FaqsTabing/index.module.css";

// const tabData = [
//     {
//         title: "Orders",
//         items: [
//             { question: "Customer support", answer: "To change your payment method, shipping information, change your subscription (frequency) or the contents of your order, you will need to log in to your account by visiting www.brunomd.eu." },
//             { question: "Cancellation and Return", answer: "Policy and return process." },
//             { question: "How can I change my order?", answer: "To change your payment method, shipping information, change your subscription (frequency) or the contents of your order, you will need to log in to your account by visiting www.brunomd.eu." },
//             { question: "Shipping", answer: "To change your payment method, shipping information, change your subscription (frequency) or the contents of your order, you will need to log in to your account by visiting www.brunomd.eu." },
//             { question: "Exercise tips for diabetics", answer: "Wear your diabetes ID, and keep snacks (e.g., cookies or juice) on the side in case of hypoglycemia event occurs. " },
//         ],
//     },
//     {
//         title: "Cancellation and Return",
//         items: [{ question: "Customer support", answer: "Customer support" },
//         { question: "Policy details", answer: "Information about returns and cancellations." },
//         { question: "Exercise tips for diabetics", answer: "Wear your diabetes ID, and keep snacks (e.g., cookies or juice) on the side in case of hypoglycemia event occurs. " },

//         ],
//     },
//     {
//         title: "Shipping",
//         items: [{ question: "Shipping details", answer: "Expected delivery time and charges." },
//         { question: "Exercise tips for diabetics", answer: "Wear your diabetes ID, and keep snacks (e.g., cookies or juice) on the side in case of hypoglycemia event occurs. " },
//         ],

//     },
//     {
//         title: "Customer support",
//         items: [{ question: "Contact support", answer: "Ways to reach customer support." },
//         { question: "Exercise tips for diabetics", answer: "Wear your diabetes ID, and keep snacks (e.g., cookies or juice) on the side in case of hypoglycemia event occurs. " },
//         ],
//     },
//     {
//         title: "Account issues",
//         items: [{ question: "Reset password", answer: "Steps to reset your password." },
//         { question: "Exercise tips for diabetics", answer: "Wear your diabetes ID, and keep snacks (e.g., cookies or juice) on the side in case of hypoglycemia event occurs. " },
//         ],
//     },
// ];

// const FaqsTab = () => {
//     const [activeTab, setActiveTab] = useState("Orders");
//     const [openIndex, setOpenIndex] = useState(0);

//     const toggleAccordion = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className={styles.FaqtabMian}>
//             <div className={styles.helpMain}>
//                 <div className={styles.helpDiv}>
//                     <div className={styles.helpBtn}>
//                         <p>Help</p>
//                     </div>
//                 </div>
//                 <div className={styles.helpdec}>
//                     <p>Quick answers to questions you may have about Untitled UI and billing. Can't find what you're looking for? Check out our full documentation.</p>
//                 </div>
//             </div>

//             {/* Tab Section Start */}
//             <div className={styles.tabMian}>
//                 <div>
//                     <img src='svg/humanQuestion.svg' alt="FAQ Illustration" />
//                 </div>
//                 <div className={styles.Tabsection}>
//                     <div className={styles.container}>
//                         <div className={styles.tabs}>
//                             {tabData.map((tab) => (
//                                 <div
//                                     key={tab.title}
//                                     onClick={() => {
//                                         setActiveTab(tab.title);
//                                         setOpenIndex(0); 
//                                     }}
//                                     className={`${styles.tab} ${activeTab === tab.title ? styles.activeTab : ""}`}
//                                 >
//                                     {tab.title}
//                                 </div>
//                             ))}
//                         </div>

//                         <div className={styles.content}>
//                             {tabData.map((tab) =>
//                                 activeTab === tab.title ? (
//                                     <div className={styles.accordion}>
//                                         {tab.items.map((item, idx) => (
//                                             <div key={idx} className={styles.accordionItem}>
//                                                 <div className={styles.accordionHeader} onClick={() => toggleAccordion(idx)}>
//                                                     <div>
//                                                         <p className={styles.accordionNumber}>{String(idx + 1).padStart(3, '0')}</p>
//                                                     </div>
//                                                     <div className={styles.titleicon}>
//                                                         <p className={styles.accordionTitle}>{item.question}</p>
//                                                         <div className={styles.accordionArrow}>
//                                                             {openIndex === idx ? <img src='svg/up.svg' alt=''/> : <img src='svg/down.svg' alt=''/>}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className={`${styles.accordionBody} ${openIndex === idx ? styles.open : ""}`}> {item.answer}
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : null
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FaqsTab;



import React, { useState } from 'react';
import styles from "../FaqsTabing/index.module.css";

const FaqsTab = () => {
    const [activeTab, setActiveTab] = useState("Orders");
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.FaqtabMian}>
            <div className={styles.helpMain}>
                <div className={styles.helpDiv}>
                    <div className={styles.helpBtn}>
                        <p>Help</p>
                    </div>
                </div>
                <div className={styles.helpdec}>
                    <p>Quick answers to questions you may have about Untitled UI and billing.</p>
                </div>
            </div>

            <div className={styles.tabMian}>
                <div>
                    <img src='svg/humanQuestion.svg' alt="FAQ Illustration" />
                </div>
                <div className={styles.Tabsection}>
                    <div className={styles.container}>
                        <div className={styles.tabs}>
                            <div onClick={() => setActiveTab("Orders")} className={`${styles.tab} ${activeTab === "Orders" ? styles.activeTab : ""}`}>Orders</div>
                            <div onClick={() => setActiveTab("Cancellation and Return")} className={`${styles.tab} ${activeTab === "Cancellation and Return" ? styles.activeTab : ""}`}>Cancellation and Return</div>
                            <div onClick={() => setActiveTab("Shipping")} className={`${styles.tab} ${activeTab === "Shipping" ? styles.activeTab : ""}`}>Shipping</div>
                            <div onClick={() => setActiveTab("Customer support")} className={`${styles.tab} ${activeTab === "Customer support" ? styles.activeTab : ""}`}>Customer Support</div>
                            <div onClick={() => setActiveTab("Account issues")} className={`${styles.tab} ${activeTab === "Account issues" ? styles.activeTab : ""}`}>Account Issues</div>
                        </div>

                        <div className={styles.content}>
                            {activeTab === "Orders" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(0)}>
                                            <p className={styles.accordionTitle}>Customer support</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 0 ? styles.open : ""}`}>To change your payment method, log in to your account.</div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
                                            <p className={styles.accordionTitle}>Cancellation and Return</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 1 ? styles.open : ""}`}>Shipping details and delivery times.</div>
                                    </div>
                                    
                                    
                                </div>
                            )}
                              {activeTab === "Orders" && (
                                <div className={styles.accordion2}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(3)}>
                                            <p className={styles.accordionTitle}>How can I change my order?</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 3 ? styles.open : ""}`}>To change your payment method, shipping information, change your subscription (frequency) or the contents of your order, you will need to log in to your account by visiting www.brunomd.eu. At the top right of the home page click on the 'Log in' link above your cart. Please note that you will need an account to make changes and will need to create one if you did not do so at checkout</div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(4)}>
                                            <p className={styles.accordionTitle}>Shipping</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 4 ? styles.open : ""}`}>Shipping details and delivery times.</div>
                                    </div>
                                    
                                    
                                </div>
                            )}

                            {activeTab === "Cancellation and Return" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
                                            <p className={styles.accordionTitle}>Account issues</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 1 ? styles.open : ""}`}>Information about returns and cancellations.</div>
                                    </div>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(2)}>
                                            <p className={styles.accordionTitle}>Shipping</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 2 ? styles.open : ""}`}>Shipping details and delivery times.</div>
                                    </div>
                                </div>
                                
                            )}
                            {activeTab === "Cancellation and Return" && (
                                <div className={styles.accordion2}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(3)}>
                                            <p className={styles.accordionTitle}>Policy details</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 3 ? styles.open : ""}`}>Information about returns and cancellations.</div>
                                    </div>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(4)}>
                                            <p className={styles.accordionTitle}>Return process</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 4 ? styles.open : ""}`}>Step-by-step return process.</div>
                                    </div>
                                </div>
                                
                            )}

                            {activeTab === "Shipping" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(4)}>
                                            <p className={styles.accordionTitle}>Shipping details</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 4 ? styles.open : ""}`}>Expected delivery time and charges.</div>
                                    </div>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(5)}>
                                            <p className={styles.accordionTitle}>Tracking</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 5 ? styles.open : ""}`}>How to track your order.</div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "Customer support" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(6)}>
                                            <p className={styles.accordionTitle}>Contact support</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 6 ? styles.open : ""}`}>Ways to reach customer support.</div>
                                    </div>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(7)}>
                                            <p className={styles.accordionTitle}>Support hours</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 7 ? styles.open : ""}`}>Availability of customer support.</div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "Account issues" && (
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(8)}>
                                            <p className={styles.accordionTitle}>Reset password</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 8 ? styles.open : ""}`}>Steps to reset your password.</div>
                                    </div>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(9)}>
                                            <p className={styles.accordionTitle}>Account security</p>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 9 ? styles.open : ""}`}>How to keep your account secure.</div>
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
