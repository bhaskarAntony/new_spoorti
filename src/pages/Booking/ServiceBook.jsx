import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ServiceBook() {
    const { services } = useParams();
  const [formData, setFormData] = useState({
    guestName: '',
    selectedService: services,
    checkIn: '',
    checkOut: '',
    message: '',
    phoneNumber: '',
    email: ''
  });

  useEffect(() => {
    // Update selectedService in formData when services param changes
    setFormData(prevState => ({
      ...prevState,
      selectedService: services
    }));
  }, [services]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Display form data in console
      };
    
  return (
    <div>
          <div className="contact-banner about-banner">
            {/* <h1 className='fs-1 fw-bold text-center'>About us</h1>
            <p className="fs-6 text-center">
            SPORTI consists of a team of Senior Officers from various units of the Police Department. It also has a Working Committee who conduct various Conferences and Workshops to discuss the operations and functioning of the Institute. The team hosts periodic meetings every last Friday of the month for effective improvements of the Institute.
            </p> */}
             <div className="skew-container">
        <div className="skew-left">
            <h1 className="fs-2 fw-bold">Services</h1>
        </div>
        <div className="skew-right d-flex align-items-center">
        <h1 className="fs-2 fw-bold"></h1>
        </div>
    </div>

           
        </div>
        <div className="container  p-3 p-md-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label>Guest Name</label>
              <input type="text" className="form-control" name="guestName" value={formData.guestName} onChange={handleChange} />
            </div>
            <div className="form-group mt-3">
              <label>Service</label>
              <input type="text" className="form-control" name="selectedService" value={formData.selectedService} readOnly />
            </div>
            <div className="form-group mt-3">
              <label>Phone Number</label>
              <input type="tel" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group mt-3">
              <label>Check In</label>
              <input type="date" className="form-control" name="checkIn" value={formData.checkIn} onChange={handleChange} />
            </div>
            <div className="form-group mt-3">
              <label>Check Out</label>
              <input type="date" className="form-control" name="checkOut" value={formData.checkOut} onChange={handleChange} />
            </div>
            <div className="form-group mt-3">
              <label>Message</label>
              <textarea className="form-control" rows="3" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
          
        <div className="mt-4 d-flex gap-3">
        <button type="submit" className="btn btn-primary p-3 w-100">Book Now</button>
            <button type="button" className="btn btn-danger p-3 w-100" onClick={() => setFormData({})}>Cancel</button>
        </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ServiceBook