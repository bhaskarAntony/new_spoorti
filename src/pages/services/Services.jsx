import React, { useState, useEffect } from 'react';
import servicesData from '../../data/services';
import './style.css';
import { useParams } from 'react-router-dom';

function Services() {
  const { sporti } = useParams(); // Destructure sporti from useParams()
  const [service, setService] = useState(null); // Initialize service state with null

  useEffect(() => {
    // Fetch and set service based on sporti parameter
    setService(servicesData[sporti]);
  }, [sporti]); // Trigger effect whenever sporti changes

  if (!service) {
    return <div>Loading...</div>; // Render loading indicator while data is being fetched
  }

  return (
    <div className='services'>
      <div className="contact-banner">
        <div className="skew-container">
          <div className="skew-left">
            <h1 className="fs-2 fw-bold">SERVICES</h1>
          </div>
          <div className="skew-right d-flex align-items-center">
            <h1 className="fs-2 fw-bold">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="container bg-white p-3 py-5">
        <div className="text-center mb-5">
          <i className="bi bi-stars fs-2 text-warning"></i>
          <h1 className="fs-2 fw-bold title">{service.title}</h1>
          <span className="fs-6 subtitle d-block">{service.subtitle}</span>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-8">
            {service.services.map((item, index) => (
              <div className={`row p-3 rounded-3 mb-4 align-items-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`} key={index}>
                <div className="col-12 col-md-3">
                  <img src={item.image} alt="" className="w-100 mb-3" />
                </div>
                <div className="col-12 col-md-9">
                  <h1 className="fs-4 title fw-bold">{item.title}</h1>
                  <p className="mt-2 fs-6 text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-4">
            <div className="all-services">
              <div className="row">
                {service.services.map((item, index) => (
                  <div className="col-6" key={index}>
                    <div className="service-card">
                      <img src={item.image} alt="" className="w-100 h-100" />
                      <div className="service-info text-center">
                        <span className="fs-6 text-white">{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
