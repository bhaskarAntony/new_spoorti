import React, { useState } from 'react';
import axios from 'axios';

function Feedback({sporti}) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    sport: sporti,
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any client-side validation here before submitting

    axios.post('http://localhost:5000/api/feedback', formData)
      .then(response => {
        alert('Form submitted successfully');
        // Optionally, you can reset the form here
      })
      .catch(error => {
        alert('Form submission failed:', error);
      });
  };

  return (
    <div className="row mt-4">
      <div className="col-md-8 offset-md-2">
        <div className="contact-from p-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="from-group mt-3">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="FULL NAME"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="from-group mt-3">
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="EMAIL ADDRESS"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="from-group mt-3">
                  {/* <input
                    type="text"
                    placeholder="SPORTI"
                    value={formData.sport}
                    readOnly
                  /> */}

                  <select
                   name="sport"
                   value={formData.sport}
                   onChange={handleChange}
                   className='form-select' id="">
                    <option value="sporti1">SPORTI1</option>
                    <option value="sporti2">SPORTI2</option>
                   </select>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="from-group mt-3">
                  <input
                    type="text"
                    name="subject"
                    placeholder="SUBJECT"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="from-group mt-3">
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="form-group mt-4 text-center">
                <button type="submit" className="blue-btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
