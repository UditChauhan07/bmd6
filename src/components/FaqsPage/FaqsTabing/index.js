



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
                            {activeTab === "Orders" && (
                                <div className={styles.accordion2}>
                                    <div className={styles.accordionItem}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(3)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>003</p>
                                                <p className={styles.accordionTitle}>How can I change my order?</p>
                                            </div>
                                            <div> <img src={openIndex === 3 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 3 ? styles.open : ""}`}>To change your payment method, shipping information, change your subscription (frequency) or the contents of your order, you will need to log in to your account by visiting www.brunomd.eu. At the top right of the home page click on the 'Log in' link above your cart. Please note that you will need an account to make changes and will need to create one if you did not do so at checkout</div>
                                    </div>
                                    <div className={styles.accordionItem2}>
                                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(4)}>
                                            <div className={styles.titlenum} >
                                                <p className={styles.accordionNumber}>004</p>
                                                <p className={styles.accordionTitle}>Shipping</p>
                                            </div>
                                            <div> <img src={openIndex === 4 ? 'svg/up.svg' : 'svg/down.svg'} alt='' /> </div>
                                        </div>
                                        <div className={`${styles.accordionBody} ${openIndex === 4 ? styles.open : ""}`}>Shipping details and delivery times.</div>
                                    </div>


                                </div>
                            )}

                            {activeTab === "Cancellation and Return" && (
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
                            {activeTab === "Cancellation and Return" && (
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

                            {activeTab === "Shipping" && (
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
                            {activeTab === "Shipping" && (
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

                            {activeTab === "Account issues" && (
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
                            {activeTab === "Account issues" && (
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
