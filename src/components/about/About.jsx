import React from 'react'

function About() {
  return (
    <div className='about-container p-3 p-md-5'>
        <div className="row align-items-center">
            <div className="col-12 col-md-6">
                <div className="about-left mb-3">
                    <p className="fs-4">Since 1973</p>
                <h1 className="fs-1 fw-bold">SPORTI - Senior Police Officers <br /> Research and Training Institute</h1>
                <p className="fs-5 text-secondary">SPORTI - Senior Police Officers Research and Training Institute was established in the year 1973 and has been successfully catering to the needs of Police department. It was priorly known as Senior Police Officer Mess and renamed to SPORTI in 2019 to enhance the quality of services being provided. </p>
                </div>
                <div className="btns d-flex flex-wrap gap-3 mt-3"> 
                    <button className="main-btn">Know More</button>
                    <button className="btn-outline">Our services</button>
                </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
                <div className="about-right">
                    <img src="./images/aboutus/smwaus_1.jpg" alt=""  className='w-100'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About