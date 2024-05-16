import React, { useState, useEffect } from 'react';
import SuccessPopup from '../../components/popups/SuccessPopup';
import CryptoJS from 'crypto-js';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

function MainFunctionHallBooking() {
    const [ApplicationNo, setApplicationNo] = useState(null)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        sporti: '',
        checkIn: '',
        checkOut: '',
        serviceName: '',
        serviceType: '',
        totalAmount: 0
    });
    const [showmodal, setShowModal] = useState(false);
    const [desc, setDesc] = useState(null);
    const [title, setTitle] = useState(null);
    const [message, setMessage] = useState('');

    const handleClose = () => {
        setShowModal(false);
    };

    const openModal = (title, desc) => {
        setShowModal(true);
        setDesc(desc);
        setTitle(title);
    };

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
    const generateHash512 = (text) => {
        const hash = CryptoJS.SHA512(text);
        return hash.toString(CryptoJS.enc.Hex);
    };

    const createPaymentForm = (name, email, phonenumber, service, applicationNo) => {
        const requestData = {
            K1USRID: 'K1SPOTIUSER',
            K1PWD: '39d16932b27ba15a4c77fd09f8817b2dbce0089dfd45b602fdad8881127002560c5249a77c9dce96fc88a035a1393553ca80f1196b2f89a27b701525533fc55c',
            Name: formData.user,
            AppNo: 'MD89786',
            Email: formData.email,
            Phone: formData.phoneNumber,
            ProductInfo: formData.serviceName,
            AmountPaid: calculateTotalCost()
        };

        // Concatenate parameters in the specified order
        const requestDataString = `K1USRID=${requestData.K1USRID}|K1PWD=${requestData.K1PWD}|Name=${requestData.Name}|AppNo=${requestData.AppNo}|Phone=${requestData.Phone}|Email=${requestData.Email}|ProductInfo=${requestData.ProductInfo}|AmountPaid=${requestData.AmountPaid}`;

        // Generate checksum based on concatenated string
        const checksum = generateHash512(requestDataString);

        // Append checksum and return URL
        const formValue = `${requestDataString}|CheckSum=${checksum}|ReturnURL=http://localhost:58851/College/Purenewal.aspx`;

        // Create form element
        const form = document.createElement('form');
        form.id = 'FormPost';
        form.method = 'post';
        form.action = 'https://koneportal.cmsuat.co.in:1443/SPORTI/Index/UXhBakNVanVwTFRWM3IremdWSjV5dz09';

        // Create and append input for SPORTIFormData
        const input = document.createElement('input');
        input.type = 'hidden';
        input.id = 'SPORTIFormData';
        input.name = 'SPORTIFormData';
        input.value = formValue;
        form.appendChild(input);

        // Append form to body and submit
        document.body.appendChild(form);
        form.submit();
    };


    const submitForm = () => {
        axios.post('http://localhost:5000/api/submitForm', formData)
            .then(response => {
                const { success, user} = response.data;
                console.log(response)
                if (success) {
                    // setApplicationNo(applicationNo);
                    createPaymentForm(formData.username, formData.email, formData.phoneNumber, formData.serviceName, user.applicationNo)
                    setMessage(`Booking submitted successfully with application number ${user.applicationNo}`);
                    openModal('Success', `Booking submitted successfully with application number ${user.applicationNo}`)
                } else {
                    setMessage('Failed to submit booking');
                }
            })
            .catch(error => console.error('Error submitting form:', error));
    };
    

    return (
        <div className='main-function-hall-booking container-fluid p-3 p-md-5'>
            <div className="row">
                <div className="col-md-8">
                    <h1 className="fs-1">Book Our services</h1>
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
                                <Dropdown className='w-100'>
                                    <Dropdown.Toggle className='bg-light text-dark border-secondary w-100 text-start'>
                                        {formData.serviceName || 'Select Service Name'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'Main Event Hall Booking' })}>Main Event Hall Booking</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'Conference Hall Booking' })}>Conference Hall Booking</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'Conference Hall Booking' })}>Training Hall Booking</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'Barbeque Area Booking' })}>Barbeque Area Booking</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'Badminton' })}>BADMINTON Booking</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'mini theatre' })}>MINI THEATRE Booking</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'table tennis' })}>TABLE TENNIS Booking</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="serviceType" className="form-label">Service Type</label>
                                <Dropdown className='w-100'>
                                    <Dropdown.Toggle className='bg-light text-dark border-secondary w-100 text-start'>
                                        {formData.serviceType || 'Select Service Type'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceType: 'Private Parties' })}>Private Parties</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceType: 'Senior Police Officers of Other Govt Department' })}>Senior Police Officers of Other Govt Department</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceType: 'Serving and Senior Police Officers' })}>Serving and Senior Police Officers</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <ul className="list-group">
                            <li className='list-group-item'>Username: {formData.username}</li>
                            <li className='list-group-item'>Email: {formData.email}</li>
                            <li className='list-group-item'>Phone Number: {formData.phoneNumber}</li>
                            <li className='list-group-item'>SPORTI: {formData.sporti}</li>
                            <li className='list-group-item'>Check In: {formData.checkIn}</li>
                            <li className='list-group-item'>Check Out: {formData.checkOut}</li>
                            <li className='list-group-item'>Service Name: {formData.serviceName}</li>
                            <li className='list-group-item'>Service Type: {formData.serviceType}</li>
                            <li className='list-group-item'>Service Price: {calculateTotalCost()}</li>
                            <li className='list-group-item'><h1 className='fs-2 fw-bold'>Total: {calculateTotalCost()}</h1> </li>
                            <button className="btn btn-primary mt-4" onClick={createPaymentForm}>Continue</button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {message && <p>{message}</p>}
                </div>
            </div>
            <SuccessPopup show={showmodal} close={handleClose} title={title} desc={desc}/>
        </div>
    );
}

export default MainFunctionHallBooking;
