import React from 'react'
import styles from '../../components/StickySection/Sticky.module.css'
import { useNavigate } from "react-router-dom";
const Sticky = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/video-tutorial");
    };
    const handleClick2 = () => {
        navigate("/faqs");
    };
    const handleQuickStartClick = () => {
        window.open("pdf/Printing Bruno MD6 quick start guide & Video tutorials.pdf", "_blank", "noopener,noreferrer");
    };
    const handleNewUserClick = () => {
        window.open("pdf/Bruno MD6 NEW USER GUIDE.pdf", "_blank", "noopener,noreferrer");
    };
    return (
        <div className={styles.Tutorialsection}>
            <div className={styles.videoTutorial3} onClick={handleClick2} ><h5><img src='svg/faqIcon.svg' alt='faqIcon'/> </h5></div>
            <div className={styles.videoTutorial} onClick={handleClick} ><h5><img src='svg/video-tutorialsvg.svg' alt='video-tutorialsvg'/></h5></div>
          
            <div className={styles.videoTutorial4} onClick={handleNewUserClick}><h5><img src='svg/NewUserIcon.svg' alt='NewUserIcon'/></h5></div>
            <div className={styles.videoTutorial2} onClick={handleQuickStartClick}><h5><img src='svg/quickIcon.svg' alt=''/></h5></div>
        </div>
    )
}

export default Sticky
