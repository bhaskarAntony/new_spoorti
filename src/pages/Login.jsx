import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container login'>
        <div className="card shadow">
            <h1 className="fs-3">Login to Access Sporti</h1>
            <div className="form-group mt-3">
                <label htmlFor="">username</label>
                <input type="text" placeholder='Username' className="p-3 form-control" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="">password</label>
                <input type="password" placeholder='password' className="p-3 form-control" />
            </div>
            <div class="form-check mt-3">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
               Accept Sporti privacy policy
            </label>
            </div>
           
            <Link to={'/'} className="btn btn-primary mt-3 p-3">Login</Link>
            <span className="fs-6 mt-3">You Dont Have Any Account? <a href="/signup">Create Account</a></span>
        </div>
    </div>
  )
}

export default Login