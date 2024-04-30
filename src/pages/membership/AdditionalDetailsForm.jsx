// AdditionalDetailsForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

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
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     await axios.post(`http://localhost:5000/api/membership/submit-application/${id}`, formData);
        //     alert('Membership application submitted successfully');
        //     // navigate(`/admin/${id}`)
        // } catch (error) {
        //     console.error('Application submission error:', error);
        //     alert('Error submitting membership application');
        // }
        alert('your application is submitted after verification you can access the sporti services.')
    };

    return (
        <div className="container p-2 p-md-5">
            <h2>Additional Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Official Number:</label>
                            <input type="text" className="form-control" name="officialNumber" value={formData.officialNumber} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Official Address:</label>
                            <input type="text" className="form-control" name="officialAddress" value={formData.officialAddress} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Residential Address:</label>
                            <input type="text" className="form-control" name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Designation:</label>
                            <input type="text" className="form-control" name="designation" value={formData.designation} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Unit:</label>
                            <input type="text" className="form-control" name="unit" value={formData.unit} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Gender:</label>
                        <Dropdown>
                            <Dropdown.Toggle  className='bg-light text-dark border-secondary'>
                                {formData.gender ? formData.gender : 'Select Gender'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleChange({ target: { name: 'gender', value: 'male' } })}>Male</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleChange({ target: { name: 'gender', value: 'female' } })}>Female</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleChange({ target: { name: 'gender', value: 'other' } })}>Other</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                        <div className="">
                   <div className="row">
                    <div className="col-12 col-md-6">
                    <div className="mb-3">
                        <label className="form-label">KGID No:</label>
                        <input type="text" className="form-control" name="kgidNo" value={formData.kgidNo} onChange={handleChange} />
                    </div>
                    </div>


                    <div className="col-12 col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Working Status:</label>
                        <input type="text" className="form-control" name="workingStatus" value={formData.workingStatus} onChange={handleChange} />
                    </div>
                    </div>

                    <div className="col-12 col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Date of Birth:</label>
                        <input type="date" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="mb-3">
    <label className="form-label">Blood Group:</label>
    <Dropdown>
        <Dropdown.Toggle className='bg-light text-dark border-secondary'>
            {formData.bloodGroup ? formData.bloodGroup : 'Select Blood Group'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleChange({ target: { name: 'bloodGroup', value: 'A+' } })}>A+</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange({ target: { name: 'bloodGroup', value: 'A-' } })}>A-</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange({ target: { name: 'bloodGroup', value: 'B+' } })}>B+</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange({ target: { name: 'bloodGroup', value: 'B-' } })}>B-</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange({ target: { name: 'bloodGroup', value: 'AB+' } })}>AB+</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange({ target: { name: 'bloodGroup', value: 'AB-' } })}>AB-</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange({ target: { name: 'bloodGroup', value: 'O+' } })}>O+</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange({ target: { name: 'bloodGroup', value: 'O-' } })}>O-</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</div>
                    </div>
                    <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Area of Interest (Sports):</label>
                        <input type="text" className="form-control" name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange} />
                    </div>
                    </div>


                    <div className="col-md-6">
                    <div className="mb-3">
        <label className="form-label">Profile Photo:</label>
        <input type="file" className="form-control" name="profilePhoto" onChange={handleChange} />
    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="mb-3">
                    <label className="form-label">Police ID:</label>
                    <input type="file" className="form-control" name="policeId" onChange={handleChange} />
                </div>
                    </div>

                    <div className="col-md-6">
    <div className="mb-3">
        <label className="form-label">Request Letter:</label>
        <input type="file" className="form-control" name="requestLetter" onChange={handleChange} />
    </div>
</div>

                   </div>
  
   
   
    
</div>


                    </div>
                </div>
                <div className="mb-3 form-check form-switch">
                <input type="checkbox" className='form-check-input' name="isMembershipAgreed" checked={formData.isMembershipAgreed} onChange={handleChange} />
                    <label className='form-check-label'>
                       
                        I agree to the membership terms and conditions
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit Application</button>
            </form>
        </div>
    );
};

export default AdditionalDetailsForm;
