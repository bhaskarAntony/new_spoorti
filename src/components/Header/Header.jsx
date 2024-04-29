import Button from 'react-bootstrap/Button';
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/main_logo.svg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Header() {
  
  const [show, setShow] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
   <header>
  <Navbar expand="lg" className="navbar p-0">
  <Container fluid className='p-0'>
    <div className="logo-container d-flex align-items-center bg-white">
    <Navbar.Brand href="/"><div className='d-flex gap-2 align-items-center logo'>
      <img src={logo} alt="logo" /> 
      <h1 className="fs-3 fw-bold m-0 text-black">SPORTI</h1></div></Navbar.Brand>
    </div>

    <button className='btn p-0 bg-transparent text-white d-block d-md-none' onClick={handleShow}><i className='bi bi-list fs-1'></i></button>
    <Navbar.Collapse id="navbarScroll" className='p-0'>
      <div className="d-none d-md-block w-100">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link href="/services">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <NavDropdown
                                    title="Sporti1"
                                    id="basic-nav-dropdown1"
                                    show={showDropdown1}
                                    onMouseEnter={() => setShowDropdown1(true)}
                                    onMouseLeave={() => setShowDropdown1(false)}
                                >
            <NavDropdown.Item href="/food">Dining</NavDropdown.Item>
            <NavDropdown.Item href="/room">Accomodation</NavDropdown.Item>
            {/* <NavDropdown.Item href="/events">Events</NavDropdown.Item> */}
            <NavDropdown.Item href="/conference-hall">Conference Hall</NavDropdown.Item>
            <NavDropdown.Item href="/view/2">Main Event Hall</NavDropdown.Item>
            <NavDropdown.Item href="/services">Mini Theatre</NavDropdown.Item>
            <NavDropdown.Item href="/view/6">Barbeque</NavDropdown.Item>
            <NavDropdown.Item href="/services">GYM</NavDropdown.Item>
            <NavDropdown.Item href="/services">Badminton</NavDropdown.Item>
            <NavDropdown.Item href="/services">Table Tennis</NavDropdown.Item>
            <NavDropdown.Item href="/services">Billiards</NavDropdown.Item>
            <NavDropdown.Item href="/services">Parking</NavDropdown.Item>
            <NavDropdown.Item href="/services" className='text-primary'>View All Services</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
                                    title="Sporti2"
                                    id="basic-nav-dropdown2"
                                    show={showDropdown2}
                                    onMouseEnter={() => setShowDropdown2(true)}
                                    onMouseLeave={() => setShowDropdown2(false)}
                                >
            <NavDropdown.Item href="/food">Accommodation </NavDropdown.Item>
            <NavDropdown.Item href="/room">Central lawn</NavDropdown.Item>
            {/* <NavDropdown.Item href="/events">Events</NavDropdown.Item> */}
            <NavDropdown.Item href="/conference-hall">Expansive lounge</NavDropdown.Item>
            <NavDropdown.Item href="/view/2">Conference room</NavDropdown.Item>
            <NavDropdown.Item href="/services">In-house Restaurant</NavDropdown.Item>
            <NavDropdown.Item href="/view/6">Training room</NavDropdown.Item>
            <NavDropdown.Item href="/services">Sullivan Police Hockey ground- </NavDropdown.Item>
            {/* <NavDropdown.Item href="/services">Badminton</NavDropdown.Item>
            <NavDropdown.Item href="/services">Table Tennis</NavDropdown.Item>
            <NavDropdown.Item href="/services">Billiards</NavDropdown.Item>
            <NavDropdown.Item href="/services">Parking</NavDropdown.Item> */}
            <NavDropdown.Item href="/services" className='text-primary'>View All Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/events&gallery">Events & Gallery</Nav.Link>
          <Nav.Link href="/faqs">Faqs</Nav.Link>
          <Nav.Link href="/contact">Contact us</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/registration">New Member signup</Nav.Link>
          {/* <a href='/login' className=" px-4 mx-3">Login</a>

          <a href='/signup' className=" px-4 mx-3 text-white">New Member signup</a> */}


        </Nav>
      </div>
      <div className="d-flex gap-2 d-none d-lg-block align-items-center flex-nowrap">
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
            <li><a href="/about"><i class="bi bi-file-person-fill"></i> About Us</a></li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownServices1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-stars"></i> Sporti1
            </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownServices1">
    <li><a class="dropdown-item text-dark" href="/food">Order Food</a></li>
    <li><a class="dropdown-item text-dark" href="/room">Room Booking</a></li>
    {/* <li><a class="dropdown-item text-dark" href="/events">Events</a></li> */}
    <li><a class="dropdown-item text-dark" href="/view/1">Conference Hall</a></li>
    <li><a class="dropdown-item text-dark" href="/view/2">Main Event Hall</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Mini Theatre</a></li>
    <li><a class="dropdown-item text-dark" href="/view/6">Barbeque</a></li>
    <li><a class="dropdown-item text-dark" href="/services">GYM</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Badminton</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Table Tennis</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Billiards</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Parking</a></li>
    <li><a class="dropdown-item text-primary" href="/services">View All Services</a></li>
    {/* <!-- Add more services as needed --> */}
</ul>

        </li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownServices2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-stars"></i> Sporti2
            </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownServices2">
    <li><a class="dropdown-item text-dark" href="/food">Accommodation </a></li>
    <li><a class="dropdown-item text-dark" href="/room">Central lawn</a></li>
    {/* <li><a class="dropdown-item text-dark" href="/events">Events</a></li> */}
    <li><a class="dropdown-item text-dark" href="/view/1">Expansive lounge</a></li>
    <li><a class="dropdown-item text-dark" href="/view/2">Conference room</a></li>
    <li><a class="dropdown-item text-dark" href="/services">In-house Restaurant</a></li>
    <li><a class="dropdown-item text-dark" href="/view/6">Training room</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Sullivan Police Hockey ground</a></li>
    {/* <li><a class="dropdown-item text-dark" href="/services">Badminton</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Table Tennis</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Billiards</a></li>
    <li><a class="dropdown-item text-dark" href="/services">Parking</a></li>
    <li><a class="dropdown-item text-primary" href="/services">View All Services</a></li> */}
    {/* <!-- Add more services as needed --> */}
</ul>

        </li>
            <li><a href="/events&gallery"><i class="bi bi-images"></i> Events & Gallery</a></li>
            <li><a href="/faqs"><i class="bi bi-stars"></i> Faqs</a></li>
            <li><a href="/contact"><i class="bi bi-person-lines-fill"></i> Contact us</a></li>
            <li><a href="/login" className='btn btn-success w-100 p-3'>Login</a></li>
            <li><a href="/signup" className='btn btn-warning w-100 p-3 mt-3'>New Member Signup</a></li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
   </header>
  );
}

export default Header;