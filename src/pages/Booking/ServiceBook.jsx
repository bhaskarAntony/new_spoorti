import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import SuccessPopup from '../../components/popups/SuccessPopup';

function MainFunctionHallBooking() {
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
    const [showmodal, setShowModal] = useState(false)
    const [desc, setDesc] = useState(null)
    const [title, setTitle] = useState(null)

    const handleClose = ()=>{
      setShowModal(false)
    }
    const openModal = (title, desc)=>{
      setShowModal(true)
      setDesc(desc)
      setTitle(title)
    }
    const [applicationNo, setApplicationNo] = useState('');
    const [message, setMessage] = useState('');

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        let amount = 0;
        switch (formData.serviceType) {
            case 'Private Parties':
                amount = 45000;
                break;
            case 'Senior Police Officers of Other Govt Department':
                amount = 25000;
                break;
            case 'Serving and Senior Police Officers':
                amount = 20000;
                break;
            default:
                amount = 0;
        }
        setFormData({
            ...formData,
            totalAmount: amount
        });
    }, [formData.serviceType]);

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

    const submitForm = () => {
        axios.post('http://localhost:5000/api/submitForm', formData)
            .then(response => {
                const { success, applicationNo } = response.data;
                if (success) {
                    setApplicationNo(applicationNo);
                    setMessage(`Booking submitted successfully with application number ${applicationNo}`);
                    openModal('Success', `Booking submitted successfully with application number ${applicationNo}`)
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
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'Barbeque Area Booking' })}>Barbeque Area Booking</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'Barbeque Area Booking' })}>Barbeque Area Booking</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, serviceName: 'mini theatre' })}>MINI THEATRE</Dropdown.Item>
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
                            <button className="btn btn-primary mt-4" onClick={submitForm}>Continue</button>
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