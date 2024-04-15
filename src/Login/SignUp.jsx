// Login.js
import React, { useState, useEffect } from 'react';
import { auth, database } from '../Database/firebase';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { Button, TextField } from '@mui/material';
import './style.css'
import signUpImage from '../assets/images/images/business-idea.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import Google from './Google';
import Facebook from './Facebook';


const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [loading, setLoading] = useState(false)

    const [userData, setUserData] = useState({
     
    })
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      setLoading(true)
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        const userData = {
          username: name,
          firstday: [
            {
              unit1: 123,
              unit2: 123,
              unit3: 123,
              unit4: 12377,
            },
          ],
          userId: user.uid,
          userEmail: user.email,
        };
    
        await axios.post('https://stormy-flannel-nightgown-ox.cyclic.app/api/addlmsUser', userData);
        
        console.log(user);
         setLoading(false)

        toast.success("Account has been created")
        // navigate('/signin') // Uncomment if you are using a navigation library
      } catch (error) {
        setLoading(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        
        toast.error(error.message)
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
          <img src={signUpImage} alt="login-image" className="w-100" />
        </div>
          <div className="col-12 col-md-6">
           <div className="login-card p-3">
           <h2>Create New Account</h2>
           <div className="mt-3">
          <label>Username</label>
           <TextField fullWidth label="Your Name" id="fullWidth" type="text" className='mt-2 w-100' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mt-3">
          <label>Email</label>
           <TextField fullWidth label="Your Email" id="fullWidth" type="email" className='mt-2 w-100' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mt-3">
          <label>Password</label>
           <TextField fullWidth label="Your Password" id="fullWidth" type="password" className='mt-2 w-100' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <p className='mt-2'>Do you have Already Account? <a href="/signin">Sign in</a></p>
           <Button variant="contained"  className='w-100 mt-3 p-3'>Create Account</Button>
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
  
  export default SignUp;