// AdditionalDetailsForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AdditionalDetailsForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        officialNumber: '',
        email: '',
        officialAddress: '',
        residentialAddress: '',
        designation: '',
        unit: '',
        gender: '',
        kgidNo: '',
        workingStatus: '',
        dateOfBirth: '',
        bloodGroup: '',
        areaOfInterest: '',
        profilePhoto: '',
        policeId: '',
        requestLetter: '',
        isMembershipAgreed: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/api/membership/submit-application/${id}`, formData);
            alert('Membership application submitted successfully');
            navigate(`/admin/${id}`)
        } catch (error) {
            console.error('Application submission error:', error);
            alert('Error submitting membership application');
        }
    };

    return (
        <div>
            <h2>Additional Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Official Number:</label>
                    <input type="text" name="officialNumber" value={formData.officialNumber} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Official Address:</label>
                    <input type="text" name="officialAddress" value={formData.officialAddress} onChange={handleChange} />
                </div>
                <div>
                    <label>Residential Address:</label>
                    <input type="text" name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} />
                </div>
                <div>
                    <label>Designation:</label>
                    <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
                </div>
                <div>
                    <label>Unit:</label>
                    <input type="text" name="unit" value={formData.unit} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>KGID No:</label>
                    <input type="text" name="kgidNo" value={formData.kgidNo} onChange={handleChange} />
                </div>
                <div>
                    <label>Working Status:</label>
                    <input type="text" name="workingStatus" value={formData.workingStatus} onChange={handleChange} />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                </div>
                <div>
                    <label>Blood Group:</label>
                    <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
                </div>
                <div>
                    <label>Area of Interest (Sports):</label>
                    <input type="text" name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange} />
                </div>
                <div>
                    <label>Profile Photo:</label>
                    <input type="file" name="profilePhoto" onChange={handleChange} />
                </div>
                <div>
                    <label>Police ID:</label>
                    <input type="file" name="policeId" onChange={handleChange} />
                </div>
                <div>
                    <label>Request Letter:</label>
                    <input type="file" name="requestLetter" onChange={handleChange} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="isMembershipAgreed" checked={formData.isMembershipAgreed} onChange={handleChange} />
                        I agree to the membership terms and conditions
                    </label>
                </div>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default AdditionalDetailsForm;
