import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Logo */}
        <div className={styles.logoSection}>
          <img src="/md6-White-logo.svg" alt="MD6 Logo" className={styles.logo} />
        </div>
        
        {/* Center Section - Links */}
        <div className={styles.links}>
          <a href="#" className={styles.link}>Contact Us</a>
          <a href="#" className={styles.link}>FAQs</a>
          <a href="#" className={styles.link}>Order on Amazon.com</a>
        </div>
        
        {/* Right Section - Social Icons */}
        {/* <div className={styles.socialIcons}>
          <a href="#" className={styles.icon}><FaTwitter /></a>
          <a href="#" className={styles.icon}><FaFacebookF /></a>
          <a href="#" className={styles.icon}><FaInstagram /></a>
          <a href="#" className={styles.icon}><FaGithub /></a>
        </div> */}
      </div>
      
      {/* Bottom Section - Copyright */}
      <div className={styles.copyright}>
        <hr className={styles.separator} />
        <p>Copyright &copy; 2025, Bruno Pharma</p>
      </div>
    </footer>
  );
};

export default Footer;