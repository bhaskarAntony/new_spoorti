import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import logo from  '../../assets/images/logoDark.svg'
function Footer() {
 
  return (
    <>
    <div className="footer-wave ">
    </div>
    <section className="footer_container d-flex flex-column justify-content-between container-fluid bg-texture" id="footer">
    <div className="row">
        <div className="col-12 cl-md-12 col-lg-3 ">
           <div className="left">
           <img src={logo} alt="logo" data-aos="fade-up"/>
            <p>
                Since its establishment in 2012, Be Practical Tech Solutions is training predominantly in IT courses. It has pioneered as a diversified entrepreneurship tapping into the necessities of the internet market in India, with its in-depth understanding of customers and companies
            </p>
           </div>

        </div>
        <div className="col-12 cl-md-12 col-lg-6 ">
           <div className="row">
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>category</h2>
                      
                    </div>

                </div>
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>Quick Search</h2>
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/food">Order Food</a></li>
                            <li><a href="/room">Book a room</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Gallery</a></li>
                            <li><a href="/event">Events</a></li>
                            
                        </ul>
                    </div>


                </div>
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>More</h2>
                        <ul>
                            <li><a href="/room">Room Bookings</a></li>
                            <li><a href="/food">Food Ordering</a></li>
                            <li><a href="/event">Event Booking</a></li>
                            <li><a href="/event">Live Stream</a></li>
                        
                            
                        </ul>
                    </div>

                </div>
           </div>
            
        </div>
        <div className="col-12 cl-md-12 col-lg-3 ">

            <div className="right">
                <h2 className='fs-4 text-left'>
                    Get in Touch
                </h2>
               <ul>
                   <li><a>spoort@gmail.com</a></li>
                   <li><a>+91-9242079779</a></li>
                   <li><a>
                   <address>#737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</address></a></li>
                  
               </ul> 
            </div>
            <div className="icons">
                <div>
                <Link to='https://www.facebook.com/BangaloreBepractical/'>   <i class="bi bi-facebook text-white"></i></Link>
                 
                </div>
                <div>
                <Link to='https://twitter.com/bepractical_com'>  <i class="bi bi-twitter text-white"></i></Link>
                  
                </div>
                <div>
                <Link to='https://www.youtube.com/channel/UCXZrCfbP7ZITt5WFjQ5mZbQ'>  <i class="bi bi-youtube text-white"></i></Link>
                  
                </div>
                <div>
                <Link to='https://www.linkedin.com/company/13338555/admin/'> <i class="bi bi-linkedin  text-white"></i></Link>
                   
                </div>
                <div>
                <Link to='https://www.instagram.com/bepracticaltraining/'><i class="bi bi-instagram text-white"></i></Link>
                    
                </div>
            </div>
            
        </div>
    </div>
   
    <div className="text-center">
        <span className="fs-6">Copyrights@2024</span>
    </div>
</section>
</>

// cc 
  )
}

export default Footer
