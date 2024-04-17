import React from 'react';
import servicesData from '../../data/services';
import './style.css';

function Services() {
  return (
    <div className='services container-fluid p-2 p-md-5'>
       <h1 className="fs-1 fw-bol">Services</h1>
       
       {
        servicesData.map((item, index) => (
            <div className="row bg-white p-3 rounded-3 mb-4" key={index}>
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} col-12 col-md-6`}>
                    <img src={item.image} alt="" className="w-100" />
                </div>
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} col-12 col-md-6`}>
                  <h1 className="display-3 fw-bold">{item.title}</h1>
                  <p className="mt-2 fs-3">{item.desc}</p>
                </div>
            </div>
        ))
       }

       <div className="all-services">
        {
            servicesData.map((item, index)=>(
                <div className="service-card">
                    <img src={item.image} alt="" className="w-100" />
                    <h1 className="fs-4">{item.title}</h1>
                </div>
            ))
        }
       </div>
        
    </div>
  );
}

export default Services;
