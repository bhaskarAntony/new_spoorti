import React from 'react'
import gallerydata from '../../data/gallery'
import { Link } from 'react-router-dom'

function Events() {
  return (
    <div className=''>
         <div className="contact-banner about-banner">
            {/* <h1 className='fs-1 fw-bold text-center'>About us</h1>
            <p className="fs-6 text-center">
            SPORTI consists of a team of Senior Officers from various units of the Police Department. It also has a Working Committee who conduct various Conferences and Workshops to discuss the operations and functioning of the Institute. The team hosts periodic meetings every last Friday of the month for effective improvements of the Institute.
            </p> */}
             <div className="skew-container">
        <div className="skew-left">
            <h1 className="fs-2 fw-bold">Events & Gallery</h1>
        </div>
        <div className="skew-right d-flex align-items-center">
        <h1 className="fs-2 fw-bold text-black">SPORTI</h1>
        </div>
    </div>
    </div>

      <div className="event-categories p-3 p-md-4">
                <div className="row">
                   {
                    gallerydata.map((eventItem, eventIndex)=>(
                        <div className="col-12 col-md-4 mb-3" key={eventIndex}>
                        <div className="event-card p-3 rounded-4 h-100">
                            <div className="event-card-top">
                                <img src={eventItem.image} alt={eventItem.title} className='w-100 mb-2 rounded-4'/>
                            </div>
                            <div className="event-card-body d-flex justify-content-between mb-3">
                                <span className="fw-bold fs-3">{eventItem.title}</span>
                            </div>
                            <div className="event card-footer d-flex justify-content-between">
                                <Link to={`/gallery/${eventItem.id}`} className="btn btn-primary rounded-pill">View Images</Link>
                            </div>
                        </div>
                    </div>
                    ))
                   }
                </div>
            </div>
    </div>
  )
}

export default Events