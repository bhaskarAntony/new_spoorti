import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Signup() {
  return (
    <div className='container signup login p-3 p-md-5'>
        <div className="card shadow">
            <h1 className="fs-3">Create New Account</h1>
            <div className="form-group mt-3">
                <label htmlFor="">username</label>
                <input type="text" placeholder='Username' className="p-3 form-control" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="">Email address</label>
                <input type="email" placeholder='Type Your Email' className="p-3 form-control" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="">Phone number</label>
                <input type="text" placeholder='Type Your Phone Number' className="p-3 form-control" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="">create password</label>
                <input type="password" placeholder='create password' className="p-3 form-control" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="">confrom password</label>
                <input type="password" placeholder='confirm password' className="p-3 form-control" />
            </div>
           
          
            <Link to={'/login'} className="btn btn-primary mt-3 p-3">Login</Link>
            <span className="fs-6 mt-3">have you already account? <a href="">Login</a></span>
        </div>
    </div>
  )
}

export default Signup