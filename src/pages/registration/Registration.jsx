// RegistrationForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log(response.data);
            // Redirect or show success message
            alert('success')
            navigate(`/additional-details/${response.data.userId}`)
        } catch (error) {
            console.error('Registration error:', error);
            // Show error message to user
            alert('error')
        }
    };

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
