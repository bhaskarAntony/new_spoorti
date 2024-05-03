import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function MainRoomBook() {
    // State variables to track form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        noGuests: 1,
        roomType: '',
        sporti: '',
        checkIn: '',
        checkOut: ''
    });

    // Function to handle form data change
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to calculate total cost
    const calculateTotalCost = () => {
        let roomPrice;
        switch (formData.roomType) {
            case 'VIP':
                roomPrice = 150;
                break;
            case 'Family':
                roomPrice = 200;
                break;
            case 'Executive':
                roomPrice = 250;
                break;
            default:
                roomPrice = 0;
        }
        return roomPrice * formData.noGuests;
    };

    // Function to render room types based on selected sporti
    const renderRoomTypes = () => {
        if (formData.sporti === 'SPORTI-1') {
            return (
                <>
                    <Dropdown.Item onClick={() => setFormData({ ...formData, roomType: 'VIP' })}>VIP</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFormData({ ...formData, roomType: 'Family' })}>Family</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFormData({ ...formData, roomType: 'Executive' })}>Executive</Dropdown.Item>
                </>
            );
        } else if (formData.sporti === 'SPORTI-2') {
            return (
                <>
                    <Dropdown.Item onClick={() => setFormData({ ...formData, roomType: 'VIP' })}>VIP</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFormData({ ...formData, roomType: 'Executive' })}>Executive</Dropdown.Item>
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <div className='boork-room container-fluid p-3 p-md-5'>
            <div className="row">
                <div className="col-md-8">
                    <h1 className="fs-1">Room Booking Form</h1>
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
                                <label htmlFor="noGuests" className="form-label">No. Guests</label>
                                <input type="number" className="form-control" name="noGuests" id="noGuests" min={1} value={formData.noGuests} onChange={handleFormChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="sporti" className="form-label">SPORTI</label>
                                <Dropdown className='w-100'>
                                    <Dropdown.Toggle className='bg-light text-dark border-secondary w-100 text-start'>
                                        {formData.sporti || 'Select SPORTI'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, sporti: 'SPORTI-1', roomType: '' })}>SPORTI-1</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFormData({ ...formData, sporti: 'SPORTI-2', roomType: '' })}>SPORTI-2</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-3">
                                <label htmlFor="roomType" className="form-label">Room Type</label>
                                <Dropdown className='w-100'>
                                    <Dropdown.Toggle className='bg-light text-dark border-secondary w-100 text-start'>
                                        {formData.roomType || 'Select Room Type'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {renderRoomTypes()}
                                    </Dropdown.Menu>
                                </Dropdown>
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
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="card shadow-sm">
                        <h1 className="fs-2">Booking information</h1>
                        <ul className="list-group">
                            <li className='list-group-item'>Username: {formData.username}</li>
                            <li className='list-group-item'>Email: {formData.email}</li>
                            <li className='list-group-item'>Phone Number: {formData.phoneNumber}</li>
                            <li className='list-group-item'>No. Guests: {formData.noGuests}</li>
                            <li className='list-group-item'>Room Type: {formData.roomType}</li>
                            <li className='list-group-item'>SPORTI: {formData.sporti}</li>
                            <li className='list-group-item'>Check In: {formData.checkIn}</li>
                            <li className='list-group-item'>Check Out: {formData.checkOut}</li>
                            <li className='list-group-item'>Room Cost: {calculateTotalCost()}</li>
                            <li className='list-group-item'><h1 className='fs-2 fw-bold'>Total: {calculateTotalCost()}</h1> </li>
                            <button className="btn btn-primary mt-4">Continue</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainRoomBook;
