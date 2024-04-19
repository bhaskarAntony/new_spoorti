import React from 'react'
import './style.css'

const data = [
    {
        image:'building',
        title:'Room Booking',
        desc:'Indulge in our laundry services, diverse dining options, and exciting recreational facilities.'
    },
    {
        image:'basket3-fill',
        title:'Food Order',
        desc:'Savor a variety of delicious cuisines prepared by our talented chefs.'
    },
    {
        image:'calendar-event',
        title:'Events Booking',
        desc:'Stay active and entertained with our state-of-the-art amenities.'
    }
]
function Services() {
  return (
    <div className='services-container container-fluid p-3 p-md-5 '>
      <div className="text-center">
      <div className="btn-tag">Services</div>
      </div>
      <h1 className="banner-heading display-3 fw-bold text-center">Explore <br />Sporti Services</h1>

      <div className="row mt-5">
        {
            data.map((item, index)=>(
                <div className="col-12 col-md-4 mb-3">
                    <div className="services-card text-center p-2 bg-white mb-4 h-100">
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