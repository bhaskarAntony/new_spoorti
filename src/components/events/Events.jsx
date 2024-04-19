import React from 'react'
import gallerydata from '../../data/gallery'
import { Link } from 'react-router-dom'

function Events() {
  return (
    <div className='p-3 p-md-5'>
        <div className="text-center">
      <div className="btn-tag">events</div>
      </div>
      <h1 className="banner-heading display-3 fw-bold text-center">SPORTI  Events</h1>

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
                                <Link to={`/gallery/${eventItem.id}`} className="btn btn-primary rounded-pill">Book Now</Link>
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