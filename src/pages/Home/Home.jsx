import React from 'react'
import Hero from '../../components/carousel/Hero'
import i1  from '../../assets/images/events_2.png'
import './style.css'

function Home() {
  return (
    <div>
        <Hero/>
        <div className="container-fluid s1 p-2 p-md-4 py-5 overflow-hidden">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 mb-4">
                    <h1 className="fs-1 fw-bold">Discover Exclusive Benefits of Booking Rooms for Police Officers</h1>
                    <p className="fs-4 text-secondary">Experience top-notch accommodations tailored to the unique needs of police officers and their families.</p>
                    <ul>
                        <li><i class="bi bi-check2 text-success"></i> Secure and Convenient Booking Process</li>
                        <li><i class="bi bi-check2 text-success"></i>  Secure and Convenient Booking Process</li>
                        <li><i class="bi bi-check2 text-success"></i>  Secure and Convenient Booking Process</li>
                    </ul>
                    <div className="d-flex gap-2 mt-4">
                        <button className="btn btn-dark p-2 px-5">Sign up</button>
                        <button className="btn btn-outline-dark p-2">Learn more</button>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={i1} alt="" className="w-100" />
                </div>
            </div>
        </div>

        <div className="steps container-fluid bg-dark text-white p-2 p-md-4">
            <div className="row">
                <div className="col-12 col-md-4 mb-3">
                    <div className="step-card text-center border h-100 p-3">
                    <i class="bi bi-box-seam-fill display-1"></i>
                        <h1 className="fs-2 fw-bold">Step-by-Step Guide</h1>
                        <p className="fs-6 text-secondary">Searching for available rooms, selecting dates, and completing the booking process is quick and easy.</p>
                        <div className="d-flex gap-2 mt-4 justify-content-center">
                        <button className="btn btn-light p-2 px-5">Search</button>
                        <button className="btn btn-outline-light p-2">Book now</button>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                    <div className="step-card text-center p-3 border h-100">
                    <i class="bi bi-box-seam-fill display-1"></i>
                        <h1 className="fs-2 fw-bold">Choose Your Dates</h1>
                        <p className="fs-6 text-secondary">Searching for available rooms, selecting dates, and completing the booking process is quick and easy.</p>
                        <div className="d-flex gap-2 mt-4 justify-content-center">
                        <button className="btn btn-light p-2 px-5">Check Availability</button>
                        <button className="btn btn-outline-light p-2">Book now</button>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-3">
                    <div className="step-card text-center border h-100 p-3">
                    <i class="bi bi-box-seam-fill display-1"></i>
                        <h1 className="fs-2 fw-bold">Step-by-Step Guide</h1>
                        <p className="fs-6 text-secondary">Searching for available rooms, selecting dates, and completing the booking process is quick and easy.</p>
                        <div className="d-flex gap-2 mt-4 justify-content-center">
                        <button className="btn btn-light p-2 px-5">Confirm</button>
                        <button className="btn btn-outline-light p-2 px-5">Book now</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home