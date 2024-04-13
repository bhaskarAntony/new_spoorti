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
                    <div className="form-group mt-2">
                        <label htmlFor="check" className="form-label">Check in</label>
                        <input type="date"  className="form-control" id='check' />
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="form-group mt-2">
                        <label htmlFor="check" className="form-label">Check out</label>
                        <input type="date"  className="form-control" id='check' />
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="form-group mt-2">
                        <label htmlFor="check" className="form-label">Adult</label>
                        <input type="number"  className="form-control" id='adult' placeholder='Adult' />
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="form-group">
                        <button className="btn btn-primary w-100">Check Availability</button>
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