import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../Navbar/styles.module.css"
import Sticky from "../StickySection/Sticky";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Hide Navbar after navigation
  };


  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src="Images/bmd6Logo.svg" alt="Logo" />
        </div>

        {/* Hamburger Button */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <Link className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`} to="/" onClick={() => handleNavigation("/")}>Home</Link>
          <Link className={`${styles.navLink} ${location.pathname === "/science" ? styles.active : ""}`} to="/science" onClick={() => handleNavigation("/science")}>The Science</Link>
          <Link className={`${styles.navLink} ${location.pathname === "/testimonial" ? styles.active : ""}`} to="/testimonial" onClick={() => handleNavigation("/testimonial")}>Testimonial</Link>
          <Link className={`${styles.navLink} ${location.pathname === "/technology" ? styles.active : ""}`} to="/technology" onClick={() => handleNavigation("/technology")}>App Technology</Link>
          <Link className={`${styles.navLink} ${location.pathname === "/24x7" ? styles.active : ""}`} to="/24x7" onClick={() => handleNavigation("/24x7")}>24x7 Health View</Link>
          {/* <Link className={`${styles.navLink} ${location.pathname === "/faqs" ? styles.active : ""}`} to="/faqs" onClick={() => handleNavigation("/faqs")}>FAQs</Link> */}
        </div>

        {/* Contact Email */}
        <div className={styles.callNowBtn}>
          <a href="mailto:Customercare@brunopharma.com">customercare@brunopharma.com</a>
          <span>
            <img src="svg/Email-icon.svg" alt="Email Icon" />
          </span>
        </div>
      </nav>
      <div>
        <Sticky />
      </div>
      <div className={styles.CtaBtn}><a href="https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true" target='blank'><img alt="Amazon" src="svg/StickNewAmazone.svg" /></a></div>
    </div>
  );
};

export default NavBar;
