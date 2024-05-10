import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import logo from  '../../assets/images/logoDark.svg'
function Footer() {
 
  return (
    <footer>
    <div className="footer-wave ">
    </div>
    <section className="footer_container d-flex flex-column justify-content-between container-fluid bg-texture" id="footer">
    <div className="row">
        <div className="col-md-6">
           <div className="left">
          <h1 className="fs-2">Disclaimer</h1>
          <hr />
               <p>
            SPORTI events are accessible for police sector of karnataka designated ACP and above higher Officials. General public has no access for the mentioned services
            </p>
           </div>

        </div>
        <div className="col-md-6">
            <h1 className="fs-2">Quick links</h1>
            <hr />
            <ul>
                <li><Link to='/privacy_policy'>Privacy Policy</Link></li>
                <li><Link to='/terms_and-conditions'>Terms and Conditions</Link></li>
                <li><Link to='site_map'>Site map</Link></li>
                <li><Link to='/help'>Help</Link></li>
            </ul>
        </div>

        {/* <div className="col-12 col-md-4">

            <div className="right">
                <h2 className='fs-2 text-left'>
                    Get in Touch
                </h2>
               <ul>
                   <li><a href=''>sportikarnataka@gmail.com</a></li>
                   <li><a href=''>+91 8277945903</a></li>
                   <li><a href=''>+91 8277945903</a></li>
                   <li><a href=''>
                   <address>#01, Prim Rose Road, Ashok Nagar, Bengaluru - 560025 Karnataka</address></a></li>
                  
               </ul> 
            </div>
            
        </div> */}
    </div>
    <hr />
   
    <div className="text-center">
        <span className="fs-6">Copyrights@2024</span>
    </div>
</section>
</footer>

// cc 
  )
}

export default Footer
