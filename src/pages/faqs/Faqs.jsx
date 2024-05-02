import React from 'react';
import './style.css';

function Faqs({ data }) {
  return (
    <div>
      <div className="faqs-page">
        <div className="contact-banner">
          <div className="skew-container">
            <div className="skew-left">
              <h1 className="fs-2 fw-bold">FAQ's</h1>
            </div>
            <div className="skew-right d-flex align-items-center">
              <h1 className="fs-2 fw-bold">{data.title}</h1>
            </div>
          </div>
        </div>

        <div className="container p-3">
        <div className="accordion" id="accordionExample">
              {data.allfaqs.map((item, index) => (
                <div  key={index}>
                  <div className="accordion-item h-100 mb-3">
                    <h2 className="accordion-header h-100">
                      <button className="accordion-button h-100" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="true" aria-controls="collapseOne">
                        {item.query_en}
                      </button>
                    </h2>
                    <div id={index} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {item.answer_en}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="feedback text-center p-3">
          <i className="bi bi-stars fs-2 text-warning"></i>
          <h1 className="fs-2 fw-bold">WRITE TO US</h1>
          <span className="fs-6 subtitle d-block">FEEL FREE TO SEND US A MESSAGE</span>
        </div>

        <div className="row mt-4">
          <div className="col-md-8 offset-md-2">
            <div className="contact-form p-3">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group mt-3">
                    <input type="text" placeholder='FULL NAME' />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group mt-3">
                    <input type="tel" placeholder='MOBILE NUMBER' min={10} max={10} />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group mt-3">
                    <input type="text" placeholder='SPORTI' />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group mt-3">
                    <input type="text" placeholder='SUBJECT' />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mt-3">
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
    </div>
  );
}

export default Faqs;
