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
     
        <Navbar.Brand className={styles.navLogo} href="#"><img src="/logo.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=""navbarScroll >
          <Nav.Link className='' href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">The Science</Nav.Link>
            <Nav.Link href="#action3">Testimonials</Nav.Link>
            <Nav.Link href="#action4">App Technology</Nav.Link>
            <Nav.Link href="#action5">FAQs</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
          <div className={styles.callNowBtn}>
            <a href="mailto:Customercare@brunopharma.com" >Customercare@brunopharma.com</a>
            <span><img src='/MailSvg.svg'/> </span>
         </div>
      
    </Navbar>
    
    </div>
  );
}

export default NavScrollExample;