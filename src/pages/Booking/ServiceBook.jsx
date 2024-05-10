import React, { useState } from 'react';
import axios from 'axios';

function MainFunctionHallBooking() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        sporti: '',
        checkIn: '',
        checkOut: '',
        serviceName: '',
        serviceType: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const calculateTotalCost = () => {
        let total = 0;
        switch (formData.serviceType) {
            case 'Private Parties':
                total = 45000;
                break;
            case 'Senior Police Officers of Other Govt Department':
                total = 25000;
                break;
            case 'Serving and Senior Police Officers':
                total = 20000;
                break;
            default:
                total = 0;
        }
        return total;
    };

    const generateChecksum = () => {
        const requestData = {
            K1USRID: 'YourK1USRID',
            K1PWD: 'YourK1PWD',
            Name: formData.username,
            AppNo: '12345',
            Email: formData.email,
            Phone: formData.phoneNumber,
            ProductInfo: formData.serviceName,
            AmountPaid: calculateTotalCost(),
            CheckSum: ''
        };

        const dataString = Object.keys(requestData).map(key => key + '=' + requestData[key]).join('|');
        const checksum = generateHash512(dataString);
        requestData.CheckSum = checksum;
        return requestData;
    };

    const generateHash512 = (dataString) => {
        // Implement your logic for generating hash here
        return 'YourGeneratedChecksum';
    };

    const submitForm = async () => {
        try {
            const requestData = generateChecksum();

        await axios.post('https://koneportal.cmsuat.co.in:1443/SPORTI/Index/UXhBakNVanVwTFRWM3IremdWSjV5dz09', requestData)
                .then(response => {
                    console.log('Payment gateway response:', response.data);
                })
                .catch(error => {
                    console.error('Error submitting payment:', error);
                });
        } catch(err) {
            console.log(err.message)
        }
    };

    return (
        <div className='main-function-hall-booking container-fluid p-3 p-md-5'>
            <div className="row">
                <div className="col-md-8">
                    <h1 className="fs-1">Main Function Hall Booking</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group mt-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" id="username" value={formData.username} onChange={handleFormChange} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mt-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" id="email" value={formData.email} onChange={handleFormChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleFormChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="sporti" className="form-label">SPORTI</label>
                                <input type="text" className="form-control" name="sporti" id="sporti" value={formData.sporti} onChange={handleFormChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="checkIn" className="form-label">Check In</label>
                                <input type="datetime-local" className="form-control" name="checkIn" id="checkIn" value={formData.checkIn} onChange={handleFormChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="checkOut" className="form-label">Check Out</label>
                                <input type="datetime-local" className="form-control" name="checkOut" id="checkOut" value={formData.checkOut} onChange={handleFormChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="serviceName" className="form-label">Service Name</label>
                                <input type="text" className="form-control" name="serviceName" id="serviceName" value={formData.serviceName} onChange={handleFormChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="serviceType" className="form-label">Service Type</label>
                                <input type="text" className="form-control" name="serviceType" id="serviceType" value={formData.serviceType} onChange={handleFormChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <ul className="list-group">
                            {/* Display form data */}
                        </ul>
                        <button className="btn btn-primary mt-4" onClick={submitForm}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFunctionHallBooking;
