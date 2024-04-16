import Button from 'react-bootstrap/Button';
import './style.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/spoori_logo.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
   <header>
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/" ><div className='d-flex gap-2 align-items-center logo'><img src={logo} alt="logo" /> <h1 className="fs-3 fw-bold text-white">Sporti</h1></div></Navbar.Brand>
      
        <button className='btn p-0 bg-transparent text-white  d-block d-md-none' onClick={handleShow}><i className='bi bi-list fs-1'></i></button>
        <Navbar.Collapse id="navbarScroll">
         <div className="d-none d-md-block w-100">
         <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            <Nav.Link href="/food">Order Food</Nav.Link>
            <Nav.Link href="/room">Rooms</Nav.Link>
            <Nav.Link href="/event">Events</Nav.Link>
            <Nav.Link href="/faqs">Faqs</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link> 
          </Nav>
         </div>
        <div className="d-flex gap-2  d-none d-lg-block">
            <a href='/login' className="btn btn-light">Login</a>
            {/* <button className="btn btn-danger">Create account</button> */}
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>



      <Offcanvas show={show} onHide={handleClose} className='mobile-nav'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title  ><div className='d-flex gap-2 align-items-center logo'><img src={logo} alt="logo" />  <h1 className="fs-3 fw-bold text-white">Sporti</h1></div> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ul >
            <li><a href="/"><i class="bi bi-house-door-fill"></i> Home</a></li>
            <li><a href="/about"><i class="bi bi-file-person-fill"></i> About us</a></li>
            <li><a href="/contact"><i class="bi bi-person-lines-fill"></i> Contact us</a></li>
            <li><a href="/food"><i class="bi bi-basket"></i> Order food</a></li>
            <li><a href="/room"><i class="bi bi-building"></i> Book Rooms</a></li>
            <li><a href="/event"><i class="bi bi-stars"></i> Events</a></li>
            <li><a href="/faqs"><i class="bi bi-stars"></i> Faqs</a></li>
            <li><a href="/gallery"><i class="bi bi-images"></i> Gallery</a></li>
            <li><a href="/login" className='btn btn-light w-100 p-3'>Login</a></li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
   </header>
  );
}

export default Header;