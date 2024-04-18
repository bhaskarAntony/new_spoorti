import React from 'react'
import './style.css'

const data = [
    {
        image:'building',
        title:'Room Booking',
        desc:'Our typical customer doesn’t want to be distracted by IT Services that don’t add direct value to their customers.'
    },
    {
        image:'basket3-fill',
        title:'Food Order',
        desc:'Our typical customer doesn’t want to be distracted by IT Services that don’t add direct value to their customers.'
    },
    {
        image:'calendar-event',
        title:'Events Booking',
        desc:'Our typical customer doesn’t want to be distracted by IT Services that don’t add direct value to their customers.'
    }
]
function Services() {
  return (
    <div className='services-container container-fluid p-3 p-md-5 '>
      <div className="text-center">
      <div className="btn-tag">Services</div>
      </div>
      <h1 className="banner-heading display-3 fw-bold text-center">Custom IT Services and <br />Solutions Built</h1>

      <div className="row mt-5">
        {
            data.map((item, index)=>(
                <div className="col-12 col-md-4">
                    <div className="services-card text-center p-2 bg-white mb-4">
                       <i className={`bi bi-${item.image} display-1 mb-3 d-block`}></i>
                        <h1 className="fs-3">{item.title}</h1>
                        <p className="fs-5 text-secondary">{item.desc}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Services