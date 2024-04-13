import React from 'react'
import './style.css'
import roomsdata from '../../data/rooms'

function Room() {
  return (
    <div className='room-container'>
        <div className="room-banner text-center d-flex align-items-center justify-content-center flex-column">
            <h1 className='display-3 fw-bold'>Stay with us</h1>
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, repellat!</p>
        </div>
        <div className="room-book-card">
            <div className="row align-item-center">
                <div className="col-12 col-md-3">
                   <div className="form-group">
                   <label htmlFor="check" className="form-label">Check in</label>
                   <div className="input-group mt-2">
                        <span class="input-group-text" id="basic-addon1">  <i class="bi bi-calendar2-week fs-4 text-primary"></i></span>
                  <input type="date"  className="form-control" id='check' />
                    </div>
                   </div>
                </div>
                <div className="col-12 col-md-3">
                <div className="form-group">
                   <label htmlFor="check" className="form-label">Check out</label>
                   <div className="input-group mt-2">
                        <span class="input-group-text" id="basic-addon1">  <i class="bi bi-calendar2-week fs-4 text-primary"></i></span>
                  <input type="date"  className="form-control" id='check' />
                    </div>
                   </div>
                </div>
                <div className="col-12 col-md-3">
                <div className="form-group">
                   <label htmlFor="check" className="form-label">No.Of Guests</label>
                   <div className="input-group mt-2">
                        <span class="input-group-text" id="basic-addon1">  <i class="bi-people-fill fs-4 text-primary"></i></span>
                  <input type="date"  className="form-control" id='check' />
                    </div>
                   </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="form-group">
                        <button className="btn btn-primary w-100 d-flex align-items-center justify-content-between">Check Availability <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>


        <div className="rooms-categories p-3 p-md-4">
            <h1 className="fs-1 fw-bold py-4">Room Sections</h1>
            <div className="rooms-inner">
                {
                    roomsdata.map((item, index)=>(
                        <div className="room-card">
                            <img src={item.image} alt="" className="w-100" />
                            <div className="room-info">
                                <button className="btn-primary btn px-3">Book Now</button>
                                <h1 className="fs-4">{item.title}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Room