import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

import styles from "./styles.module.css"

function NavScrollExample() {
  const location = useLocation(); // Get the current route path

  return (
    <div className={styles.container}>

<Navbar expand="lg" className="">
      <div className={styles.NavCOntrol}>
        <Navbar.Brand className={styles.navLogo} href="#">
          <img src="/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/" ? styles.active : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/science" ? styles.active : ""
              }`}
              to="/science"
            >
              The Science
            </Link>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/Testimonials" ? styles.active : ""
              }`}
              to="/Testimonials"
            >
              Testimonials
            </Link>
            <Link
              className={`${styles.navLink} ${
                location.pathname === "/App-Technology" ? styles.active : ""
              }`}
              to="/App-Technology"
            >
              App Technology
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className={styles.callNowBtn}>
          <a href="mailto:Customercare@brunopharma.com">
            Customercare@brunopharma.com
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