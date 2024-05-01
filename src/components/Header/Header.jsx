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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/services/sporti1">SPORTI 1</Nav.Link>
          <Nav.Link href="/services/sporti2">SPORTI 2</Nav.Link>
         
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




      <Offcanvas show={show} onHide={handleClose} className='mobile-nav p-2'>
        <Offcanvas.Header closeButton className='bg-white rounded-3'>
          <Offcanvas.Title  ><div className='d-flex gap-2 align-items-center logo'><img src={logo} alt="logo" />  <h1 className="fs-3 fw-bold">Sporti</h1></div> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ul >
            <li><a href="/"><i class="bi bi-house-door-fill"></i> Home</a></li>
            <li><a href="/about"><i class="bi bi-file-person-fill"></i> About Us</a></li>
            <li><a href="/sevices/sporti1"><i class="bi bi-file-person-fill"></i> SPORTI 1</a></li>
            <li><a href="/services/sporti2"><i class="bi bi-file-person-fill"></i> SPORTI 2</a></li>
           

     
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