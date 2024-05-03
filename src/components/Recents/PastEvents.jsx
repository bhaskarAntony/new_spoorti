import React from 'react'
import gallerydata from '../../data/gallery'
import './style.css'

function PastEvents() {
  return (
    <div className='upcoming-events'>
       <div className="row">
       {
         gallerydata.map((item, index)=>(
            <div className="col-12 col-md-6 mb-3">
                <div className="pastEvent-card p-3 rounded-5" >
                    <img src={item.image} alt={item.title} className='w-100 rounded-4' />
                   <div className="event-info d-flex flex-column align-items-center justify-content-center ">
                   <h1 className="fs-3 text-white">{item.title}</h1>
                    <button className="btn btn-warning px-4 rounded-0">View</button>
                   </div>
                </div>
            </div>
         ))   
        }
       </div>
    </div>
  )
}

export default PastEvents