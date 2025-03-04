import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./styles.module.css"

function NavScrollExample() {
  return (
    <div className={styles.container}>
    <Navbar expand="lg" className="">
      <div className={styles.NavCOntrol}>
        <Navbar.Brand className={styles.navLogo} href="#"><img src="/logo.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
           
            navbarScroll
          >
            <Nav.Link className='' href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">The Science</Nav.Link>
            <Nav.Link href="#action3">Testimonials</Nav.Link>
            <Nav.Link href="#action4">App Technology</Nav.Link>
            <Nav.Link href="#action5">FAQs</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
         <div className={styles.callNowBtn}>
            <p>CALL NOW</p>
            <span><img src='/CallNow.svg'/> </span>
         </div>
      </div>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;