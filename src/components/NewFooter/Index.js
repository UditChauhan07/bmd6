import React, { useState } from 'react'
import styles from '../NewFooter/index.module.css'
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal'

const Index = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className={styles.footer}>
            <footer className={styles.footerBar}>
                <div className={styles.logoSection}>
                    <img src="Images/whiteLogo.png" alt="Bruno MD6 Logo" className={styles.logo} />
                    <div className={styles.newsletter}>
                        <span>Subscribe To Our Newsletter: </span>
                        <input type="email" placeholder="Enter your email address" />
                        <div className={styles.arrowBtn}><button><img src='svg/inputArrow.svg' alt='inputarrow' /></button></div>
                    </div>
                </div>

                <h2 className={styles.heading}>
                    Lab-quality accuracy at home with Bruno MD6.
                </h2>
                <hr className={styles.line} />
                <div className={styles.links}>
                    <Link to="/our-mission" onClick={scrollToTop}>Our Mission</Link>
                    <p onClick={handleOpenModal} >Contact Us</p>
                    <Link to="/faqs" onClick={scrollToTop}>FAQs</Link>
                    <a href="https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true" target='blank'>Order on Amazon.com</a>
                </div>
                <div className={styles.copyright}>
                    <p >Copyright © 2025, Bruno Pharma</p>
                </div>
                {/* Modal Component */}
                <div className={styles.InquiresModal}>
                    <Modal show={showModal} onClose={handleCloseModal}>
                        <h3 style={{ textAlign: 'center' }}>Contact Us</h3>

                       
                        <form className={styles.form}>
                            <input type="text" placeholder="First name" required />
                            <input type="text" placeholder="Last name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="tel" placeholder="Mobile phone number" />
                            <textarea placeholder="Message" rows="2"></textarea>
                            <button type="submit" className={styles.submitButton}>Submit</button>
                        </form>
                    </Modal>
                </div>
            </footer>
        </div>
    )
}

export default Index
