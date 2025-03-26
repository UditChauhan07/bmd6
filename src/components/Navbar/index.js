import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../Navbar/styles.module.css";
import Sticky from "../StickySection/Sticky";
import Navtop from "../../components/Topnav/index";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Hide Navbar after navigation
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Enable body scroll
    }
  }, [menuOpen]);

  return (
    <>
      {menuOpen ? null : <Navtop />}
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            <img src="Images/bmd6Logo.svg" alt="Logo" />
          </div>

          {/* Hamburger Button */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <img src="svg/cross.svg"/> : <img src="svg/menu.svg"/>}
          </button>

          {/* Navigation Links */}
          <div className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/" ? styles.active : ""
              }`}
              to="/"
              onClick={() => handleNavigation("/")}
            >
              Home
            </Link>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/science" ? styles.active : ""
              }`}
              to="/science"
              onClick={() => handleNavigation("/science")}
            >
              The Science
            </Link>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/testimonial" ? styles.active : ""
              }`}
              to="/testimonial"
              onClick={() => handleNavigation("/testimonial")}
            >
              Testimonial
            </Link>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/technology" ? styles.active : ""
              }`}
              to="/technology"
              onClick={() => handleNavigation("/technology")}
            >
              App Technology
            </Link>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/24x7" ? styles.active : ""
              }`}
              to="/24x7"
              onClick={() => handleNavigation("/24x7")}
            >
              24x7 Health View
            </Link>
          </div>

          {/* Contact Email */}
          <div className={styles.callNowBtn}>
            <a href="mailto:Customercare@brunopharma.com">
              customercare@brunopharma.com
            </a>
            <span>
              <img src="svg/Email-icon.svg" alt="Email Icon" />
            </span>
          </div>
        </nav>

        {/* Black Overlay */}
        {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}

        <div>
          <Sticky />
        </div>
        <div className={styles.CtaBtn}>
          <a
            href="https://www.amazon.com/s?me=A2BCBSQ0DIM26F&marketplaceID=ATVPDKIKX0DER&redirect=true"
            target="blank"
          >
            <img alt="Amazon" src="svg/StickNewAmazone.svg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
