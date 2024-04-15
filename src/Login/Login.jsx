// Login.js
import React, { useState } from 'react';
import { auth, database } from '../Database/firebase';
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup  } from 'firebase/auth';
import { ref, set } from "firebase/database";
import { Button, TextField } from '@mui/material';
import './style.css'
// import loginImage from '../images/login.svg'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import Google from './Google';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

  
    const handleLogin = async () => {
      setLoading(true)

      try {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            setLoading(false)
            const user = userCredential.user;
            console.log(user);
            toast.success("sign in successfull")
            navigate('/');
        })
        .catch((error) => {
          setLoading(false)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            toast.error(error.message)
        });
      } catch (error) {
        alert(error.message);
      }
    };

  
    return (
      <div className='login-container container'>
      {
        loading?(
          <Loading/>
        ):(
          <div className="row">
          <div className="col-12 col-md-6">
            {/* <img src={loginImage} alt="login-image" className="w-100" /> */}
          </div>
          <div className="col-12 col-md-6">
            <div className="login-card">
            <h2>Login</h2>
           <div className="mt-3">
           <label>Email:</label>
            <TextField fullWidth label="Your Email" id="fullWidth" type="email" className='mt-2' value={email} onChange={(e) => setEmail(e.target.value)} />
           </div>
           <div className="mt-3">
           <label>Password:</label>
            <TextField fullWidth label="Your Password" id="fullWidth" type="password" className='mt-2' value={password} onChange={(e) => setPassword(e.target.value)} />
           </div>
           <p className='mt-2'>You Don't have Account? <a href="/signup">create Account</a></p>
            <Button variant="contained" onClick={handleLogin} className='w-100 mt-3 p-3'>Login</Button>
            <p className="text-center mt-3 text-secondary">or</p>
            <Google/>
            </div>
            </div>
           </div>
        )
      }
      </div>
    );
  };
  
  export default Login;