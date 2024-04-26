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
        <div>
            <h2>Login</h2>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
