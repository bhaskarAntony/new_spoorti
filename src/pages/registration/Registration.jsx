// RegistrationForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import SuccessPopup from '../../components/popups/SuccessPopup';

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: ''
    });
    const [showmodal, setShowModal] = useState(false)
    const [desc, setDesc] = useState(null)
    const [title, setTitle] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        // try {
        //     const response = await axios.post('http://localhost:5000/api/auth/register', formData);
        //     console.log(response.data);
        //     // Redirect or show success message
        //     alert('success')
        //     navigate(`/additional-details/${response.data.userId}`)
        // } catch (error) {
        //     console.error('Registration error:', error);
        //     // Show error message to user
        //     alert('error')
        // }
        openModal('Your application has Submitted', 'verification is pending once verfication is done you will get confirmation  to registered email')
        // navigate(`/additional-details/123`)
    };
    const handleClose = ()=>{
        setShowModal(false)
      }
      const openModal = (title, desc)=>{
        setShowModal(true)
        setDesc(desc)
        setTitle(title)
      }

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
                            <span className="span">Already have an membership account <Link to='/registration'>Login</Link></span>
                            <button type="submit" className="btn btn-primary btn-block p-3 w-100">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <SuccessPopup show={showmodal} close={handleClose} title={title} desc={desc} next={true}/>
    </div>
    );
};

export default Registration;
