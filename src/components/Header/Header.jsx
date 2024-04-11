import Button from 'react-bootstrap/Button';
import './style.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.svg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
      
        <button className='btn btn-light d-block d-md-none' onClick={handleShow}><i className='bi bi-list fs-3'></i></button>
        <Navbar.Collapse id="navbarScroll">
         <div className="d-none d-md-block w-100">
         <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#action2">Contact us</Nav.Link>
            <Nav.Link href="#action2">Order Food</Nav.Link>
            <Nav.Link href="#action2">Rooms</Nav.Link>
            <Nav.Link href="#action2">Events</Nav.Link>
            <Nav.Link href="#action2">Live Stream</Nav.Link>
            <Nav.Link href="#action2">Gallery</Nav.Link>

          
          </Nav>
         </div>
        <div className="d-flex gap-2  d-none d-lg-block">
            <button className="btn btn-light">Login</button>
            {/* <button className="btn btn-danger">Create account</button> */}
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>



      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
   </>
  );
}

export default Header;