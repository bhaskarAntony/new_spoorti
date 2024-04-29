import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            console.log(response.data); // Assuming response contains user data
            // Redirect to dashboard or handle success
            alert('success')
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
            setErrorMessage(error.response.data.message);
            alert('error')
        }
    };

    return (
        <div className='p-3 p-md-5'>
          
            {errorMessage && <div className="error">{errorMessage}</div>}
           <div className="row">
            <div className="col-md-6 offset-md-4">
                <div className="card shadow p-3">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                <div  className='form-group mt-3'>
                    <label className='form-label'>Username</label>
                    <input type="text" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='form-group mt-3'>
                    <label className='form-label'>Password</label>
                    <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className='w-100 p-3 btn btn-primary mt-4'>Login</button>
            </form>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Login;
