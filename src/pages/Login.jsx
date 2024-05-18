import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated, setUser } = useAuth();
  const navigate = useNavigate();
  const {location} = useAuth()

  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://sporti-backend-2-o22y.onrender.com/api/login', { email, password });
      setUser(response.data.user);
      alert(location)
      console.log(location);
      setIsAuthenticated(true);
      localStorage.setItem('token', response.data.token);
      navigate(location.pathname);
    } catch (error) {
        alert('no')
      console.error('Login failed', error);
    }
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(email, password);
   
//   };

  return (
   <div className="container-fluid p-3 p-md-5">
    <div className="container card shadow">
        <div className="row align-items-center">
            <div className="col-md-6">
            <img src="./images/aboutus/smwaus_1.jpg" alt="" className="w-100" />
            </div>
            <div className="col-md-6">
            <form onSubmit={login}>
      <h2>Login</h2>
     <div className="form-group mt-3">
     <label htmlFor="" className="form-label">Email Address</label>
     <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className='form-control'
        required
      />
     </div>
     <div className="form-group mt-3">
        <label htmlFor="" className="form-label">Password</label>
     <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className='form-control'
      />
     </div>
      <button type="submit" className='blue-btn mt-3 w-100 btn-lg'>Login</button>
    </form>
            </div>
        </div>
    </div>
   </div>
  );
};

export default Login;
