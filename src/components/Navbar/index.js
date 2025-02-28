import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from "./styles.module.css"

function NavScrollExample() {
  return (
    <div className={style.container}>
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand className={style.navLogo} href="#"><img src="/logo.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='' href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">The Science</Nav.Link>
            <Nav.Link href="#action3">Testimonials</Nav.Link>
            <Nav.Link href="#action4">App Technology</Nav.Link>
            <Nav.Link href="#action5">FAQs</Nav.Link>
           
           
          </Nav>
         <div className={style.callNowBtn}>
            <p>CALL NOW</p>
            <span><img src='/CallNow.svg'/> </span>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;