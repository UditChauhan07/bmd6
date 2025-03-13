import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import styles from "./styles.module.css"
import Navtop from '../Topnav/index'

function NavScrollExample() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route path

  return (
    <div className={styles.container}>
      <Navtop />
      <Navbar expand="lg" className="">
        <div className={styles.NavCOntrol}>
          <Navbar.Brand className={styles.navLogo} onClick={() => navigate("/")}>
            <img src="Images/bmd6Logo.svg" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Link
                className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""
                  }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`${styles.navLink} ${location.pathname === "/science" ? styles.active : ""
                  }`}
                to="/science"
              >
                The Science
              </Link>
              <Link
                className={`${styles.navLink} ${location.pathname === "/testimonial" ? styles.active : ""
                  }`}
                to="/testimonial"
              >
                Testimonial
              </Link>
              <Link
                className={`${styles.navLink} ${location.pathname === "/technology" ? styles.active : ""
                  }`}
                to="/technology"
              >
                App Technology
              </Link>
              <Link
                className={`${styles.navLink} ${location.pathname === "/24x7" ? styles.active : ""
                  }`}
                to="/24x7"
              >
                24x7 Health View
              </Link>
              <Link
                className={`${styles.navLink} ${location.pathname === "/faqs" ? styles.active : ""
                  }`}
                to="/faqs"
              >
                FAQs
              </Link>

            </Nav>
          </Navbar.Collapse>
          <div className={styles.callNowBtn}>
            <a href="mailto:Customercare@brunopharma.com">
              customercare@brunopharma.com
            </a>
            <span>
              <img src="svg/Email-icon.svg" alt="Email Icon" />
            </span>
          </div>
        </div>
      </Navbar>

    </div>
  );
}

export default NavScrollExample;