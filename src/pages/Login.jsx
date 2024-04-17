import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            setToken(response.data.token);
            alert('Login successful');
        } catch (error) {
            alert('Login failed. Please check your email and password.');
        }
    };

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/register', { email, password });
            alert('Registration successful');
        } catch (error) {
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className='container login'>
            <div className="card shadow">
                <h1 className="fs-3">Login to Access Sporti</h1>
                <div className="form-group mt-3">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Username' className="p-3 form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' className="p-3 form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-check mt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Accept Sporti privacy policy
                    </label>
                </div>
                <button className="btn btn-primary mt-3 p-3" onClick={handleLogin}>Login</button>
                <button className="btn btn-primary mt-3 p-3" onClick={handleRegister}>Register</button>
                <span className="fs-6 mt-3">Don't have an account? <a href="/signup">Create Account</a></span>
            </div>
        </div>
    );
}

export default Login;
