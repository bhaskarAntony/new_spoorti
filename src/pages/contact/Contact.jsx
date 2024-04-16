import React from 'react'
import './style.css'

function Contact() {
  return (
    <div className='contact p-2 p-md-5'>
        <h1 className="fs-1 fw-bold">Contact us</h1>
        <div className="row mt-4">
            <div className="col-12 col-md-6 mb-3">
                <div className="contact-left w-100">
                    <div className="card shadow w-100 border-0">
                        <h1 className="fs-3 fw-bold">Leave an Enquiry</h1>

                        <div className="form-group mt-3">
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" placeholder='Type Your Name' className="form-control" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="" className='form-label'>Phone Number</label>
                            <input type="text" placeholder='Type Your Phone Number' className="form-control" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="" className='form-label'>Message</label>
                            <textarea name="" className='form-control w-100' id="" cols="30" rows="5" placeholder='Write a Message'></textarea>
                        </div>
                        <button className="btn btn-primary p-2 fs-4 mt-3">Submit</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
                <div className="contact-right p-2">
                    <h1 className="fs-3 fw-bold mb-2">View On Maps</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.0273609615388!2d77.612095!3d12.970101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1715a47fbf91%3A0x105bdbe2d51128a2!2sSenior%20Police%20Officer&#39;s%20Research%20and%20Training%20Institute%20(SPORTI)!5e0!3m2!1sen!2sbe!4v1713247899969!5m2!1sen!2sbe" width="600" height="450" className='w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact