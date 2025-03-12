import React, { useState } from 'react';
import styles from "../FaqsTabing/index.module.css";

const tabData = [
    {
        title: "Orders",
        items: [
            { question: "Customer support", answer: "To change your payment method, shipping information, change your subscription (frequency) or the contents of your order, you will need to log in to your account by visiting www.brunomd.eu. At the top right of the home page click on the 'Log in' link above your cart. Please note that you will need an account to make changes and will need to create one if you did not do so at checkout. Please use the same email address used at checkout to link your order to your account. If an account has already been created, log in using your email address and password. You can do this by clicking on the 'Log in' link above the cart icon on the home page (top right corner) and log in. This will take you to your order history page and on the order line there is an option to 'cancel/modify' your order.If you require further assistance, please do not hesitate to contact us by email at customerservice@brunopharma.com." },
            { question: "Cancellation and Return", answer: "Policy and return process." },
            { question: "How can I change my order?", answer: "Steps to modify your order." },
        ],
    },
    {
        title: "Cancellation and Return",
        items: [{ question: "Customer support", answer: "Customer support"},
            { question: "Policy details", answer: "Information about returns and cancellations." },
            
        ],
    },
    {
        title: "Shipping",
        items: [{ question: "Shipping details", answer: "Expected delivery time and charges." }],
    },
    {
        title: "Customer support",
        items: [{ question: "Contact support", answer: "Ways to reach customer support." }],
    },
    {
        title: "Account issues",
        items: [{ question: "Reset password", answer: "Steps to reset your password." }],
    },
];

const FaqsTab = () => {
    const [activeTab, setActiveTab] = useState("Cancellation and Return"); // Default active tab
    const [openIndex, setOpenIndex] = useState(0); // First accordion open by default

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
                    <p>Quick answers to questions you may have about Untitled UI and billing. Can't find what you're looking for? Check out our full documentation.</p>
                </div>
            </div>

            {/* Tab Section Start */}
            <div className={styles.tabMian}>
                <div>
                    <img src='svg/humanQuestion.svg' alt="FAQ Illustration" />
                </div>
                <div className={styles.Tabsection}>
                    <div className={styles.container}>
                        <div className={styles.tabs}>
                            {tabData.map((tab) => (
                                <div
                                    key={tab.title}
                                    onClick={() => {
                                        setActiveTab(tab.title);
                                        setOpenIndex(0); // Jab tab change ho, pehla accordion open ho
                                    }}
                                    className={`${styles.tab} ${activeTab === tab.title ? styles.activeTab : ""}`}
                                >
                                    {tab.title}
                                </div>
                            ))}
                        </div>

                        <div className={styles.content}>
                            {tabData.map((tab) =>
                                activeTab === tab.title ? (
                                    <div className={styles.accordion}>
                                        {tab.items.map((item, idx) => (
                                            <div key={idx} className={styles.accordionItem}>
                                                <div className={styles.accordionHeader} onClick={() => toggleAccordion(idx)}>
                                                    <div>
                                                        <p className={styles.accordionNumber}>{String(idx + 1).padStart(3, '0')}</p>
                                                    </div>
                                                    <div className={styles.titleicon}>
                                                        <p className={styles.accordionTitle}>{item.question}</p>
                                                        <div className={styles.accordionArrow}>
                                                            {openIndex === idx ? <img src='svg/up.svg' /> : <img src='svg/down.svg' />}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`${styles.accordionBody} ${openIndex === idx ? styles.open : ""}`}> {item.answer}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqsTab;
