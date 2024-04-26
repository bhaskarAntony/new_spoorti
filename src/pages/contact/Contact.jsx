import React from 'react'
import './style.css'

function Contact({data}) {
  return (
    <div className='contact'>
   <div className="contact-banner">
    <div className="skew-container">
        <div className="skew-left">
            <h1 className="fs-2 fw-bold">CONTACT US</h1>
        </div>
        <div className="skew-right d-flex align-items-center">
        <h1 className="fs-2 fw-bold">{data.title}</h1>
        </div>
    </div>
   </div>

   <div className="contact-info p-4">
    <div className="row">
      {
        data.info.map((item, index)=>(
          <div className={`col-12 col-md-4 contact-main-card mb-3  `}>
            <div className="contact-card text-white p-3 h-100 rounded-2">
              <i className={`bi bi-${item.icon} display-2 mb-3`}></i>
              <h1 className="fs-3 fw-bold">{item.title}</h1>
              <p className="fs-5 mt-3">{item.desc}</p>
            </div>
          </div>
        ))
      }
    </div>
   </div>

   <div className="contact-map">
   <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7776.0547313005745!2d77.6120953!3d12.9701007!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae1715a47fbf91%3A0x105bdbe2d51128a2!2sSenior%20Police%20Officer&#39;s%20Research%20and%20Training%20Institute%20(SPORTI)%201%2C%20Primrose%20Rd%2C%20Ashok%20Nagar%20Bengaluru%2C%20Karnataka%20560025%20India!3m2!1d12.9701007!2d77.6120953!5e0!3m2!1sen!2sin!4v1714118352710!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   <div className="feedback text-center p-3">
   <i class="bi bi-stars fs-2 text-warning"></i>
   <h1 className="fs-2 fw-bold">WRITE TO US</h1>
   <span className="fs-6 subtitle d-block">FEEL FREE TO SEND US A MESSAGE</span>
   </div>


   <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
        <div className="contact-from p-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="from-group mt-3">
              <input type="text" placeholder='FULL NAME' />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="from-group mt-3">
              <input type="email" placeholder='EMAIL ADDRESS' />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="from-group mt-3">
              <input type="text" placeholder='SPORTI' value={data.title} readOnly />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="from-group mt-3">
              <input type="text" placeholder='SUBJECT' />
            </div>
          </div>

          <div className="col-12">
            <div className="from-group mt-3">
              <textarea name="" id="" cols="30" rows="10" placeholder='MESSAGE'></textarea>
            </div>
          </div>
          <div className="form-group mt-4 text-center">
            <button className="blue-btn">Submit</button>
          </div>
        </div>
     </div>
  
        </div>
      </div>
  
    </div>
  )
}

export default Contact