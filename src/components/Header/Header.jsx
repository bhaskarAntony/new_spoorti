import Button from 'react-bootstrap/Button';
import './style.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/images/spoori_logo.jpg'
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
        <Navbar.Brand href="/" ><div className='d-flex gap-2 align-items-center logo'><img src={logo} alt="logo" /> <h1 className="fs-3 fw-bold text-white">SPORTI</h1></div></Navbar.Brand>
      
        <button className='btn p-0 bg-transparent text-white  d-block d-md-none' onClick={handleShow}><i className='bi bi-list fs-1'></i></button>
        <Navbar.Collapse id="navbarScroll">
         <div className="d-none d-md-block w-100">
         <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
    <Nav.Link href="/services">Home</Nav.Link>
    <Nav.Link href="/about">About us</Nav.Link>
    <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="/food">Dining</NavDropdown.Item>
        <NavDropdown.Item href="/room">Accomodation</NavDropdown.Item>
        <NavDropdown.Item href="/events">Events</NavDropdown.Item>
        <NavDropdown.Item href="/view/1">Conference Hall</NavDropdown.Item>
        <NavDropdown.Item href="/view/2">Main Event Hall</NavDropdown.Item>
        <NavDropdown.Item href="/view/3">Mini Theatre</NavDropdown.Item>
        <NavDropdown.Item href="/view/6">Barbeque</NavDropdown.Item>
        <NavDropdown.Item href="/view/7">GYM</NavDropdown.Item>
        <NavDropdown.Item href="/view/8">Badminton</NavDropdown.Item>
        <NavDropdown.Item href="/view/9">Table Tennis</NavDropdown.Item>
        <NavDropdown.Item href="/view/10">Billiards</NavDropdown.Item>
        <NavDropdown.Item href="/view/11">Parking</NavDropdown.Item>
        <NavDropdown.Item href="/services text-primary">View All Services</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="/events&gallery">Events</Nav.Link>
    <Nav.Link href="/faqs">Faqs</Nav.Link>
    <Nav.Link href="/gallery/1">Gallery</Nav.Link>
    <Nav.Link href="/contact">Contact us</Nav.Link>
</Nav>
         </div>
        <div className="d-flex gap-2  d-none d-lg-block">
            <a href='/login' className="main-btn  px-4">Login</a>
            {/* <a href='/signup' className="btn-outline  px-4">New Member signup</a> */}
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
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownServices" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-stars"></i> Services
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownServices">
    <li><a class="dropdown-item text-dark" href="/food">Order Food</a></li>
    <li><a class="dropdown-item text-dark" href="/room">Room Booking</a></li>
    <li><a class="dropdown-item text-dark" href="/events">Events</a></li>
    <li><a class="dropdown-item text-dark" href="/view/1">Conference Hall</a></li>
    <li><a class="dropdown-item text-dark" href="/view/2">Main Event Hall</a></li>
    <li><a class="dropdown-item text-dark" href="/view/3">Mini Theatre</a></li>
    <li><a class="dropdown-item text-dark" href="/view/6">Barbeque</a></li>
    <li><a class="dropdown-item text-dark" href="/view/7">GYM</a></li>
    <li><a class="dropdown-item text-dark" href="/view/8">Badminton</a></li>
    <li><a class="dropdown-item text-dark" href="/view/9">Table Tennis</a></li>
    <li><a class="dropdown-item text-dark" href="/view/10">Billiards</a></li>
    <li><a class="dropdown-item text-dark" href="/view/11">Parking</a></li>
    <li><a class="dropdown-item text-primary" href="/services">View All Services</a></li>
    {/* <!-- Add more services as needed --> */}
</ul>

        </li>
            <li><a href="/gallery/2"><i class="bi bi-stars"></i> Events</a></li>
            <li><a href="/faqs"><i class="bi bi-stars"></i> Faqs</a></li>
            <li><a href="/events&gallery"><i class="bi bi-images"></i> Gallery</a></li>
            <li><a href="/contact"><i class="bi bi-person-lines-fill"></i> Contact us</a></li>
            <li><a href="/login" className='main-btn w-100 p-3'>Login</a></li>
            <li><a href="/signup" className='main-btn w-100 p-3 mt-3'>New Member Signup</a></li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
   </header>
  );
}

export default Header;