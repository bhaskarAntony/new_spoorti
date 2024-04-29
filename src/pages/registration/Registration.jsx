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
        <div className="container-fluid p-3 p-md-5">
        <div className=" justify-content-center">
            <div className="col-md-6 offset-md-4">
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className="text-center mb-4">Registration</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Username:</label>
                                <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password:</label>
                                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block p-3 w-100">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Registration;
