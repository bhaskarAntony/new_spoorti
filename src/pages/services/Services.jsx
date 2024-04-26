import React from 'react';
import servicesData from '../../data/services';
import './style.css';

function Services({data}) {
  return (
    <div className='services'>
      
      <div className="contact-banner">
      <div className="skew-container">
        <div className="skew-left">
            <h1 className="fs-2 fw-bold">SERVICES</h1>
        </div>
        <div className="skew-right d-flex align-items-center">
        <h1 className="fs-2 fw-bold">{data.title}</h1>
        </div>
        </div>
      </div>
       
 <div className="container bg-white p-3 py-5">
 <div className="text-center mb-5">
                <i class="bi bi-stars fs-2 text-warning"></i>
                <h1 className="fs-2 fw-bold title">Senior Police Officers Research and Training Institute- SERVICES</h1>
                <span className="fs-6 subtitle d-block">Senior Police Officers Research and Training Institute </span>
                </div>
 <div className="row mt-4">
  <div className="col-12 col-md-8">
  {
        data.services.map((item, index) => (
            <div className="row  p-3 rounded-3 mb-4 align-items-center" key={index}>
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} col-12 col-md-3`}>
                    <img src={item.image} alt="" className="w-100 mb-3" />
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} col-12 col-md-9`}>
                  <h1 className="fs-4 title fw-bold">{item.title}</h1>
                  <p className="mt-2 fs-6 text-secondary">{item.desc}</p>
                </div>
            </div>
        ))
       } 
  </div>
  <div className="col-12 col-md-4">
  <div className="all-services">
       <div className="row">
       {
             data.services.map((item, index)=>(
                <div className="col-6">
                  <div className="service-card">
                    <img src={item.image} alt="" className="w-100 h-100" />
                      <div className="service-info text-center">
                        <span className="fs-6 text-white">{item.title}</span>
                      </div>
                </div>
                </div>
            ))
        }
       </div>
       </div>
  </div>
 </div>
 </div>

      
        
    </div>
  );
}

export default Services;
