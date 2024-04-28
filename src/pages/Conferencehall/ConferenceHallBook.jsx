// BookingForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

const ConferenceHallBook = () => {
    const [formData, setFormData] = useState({
        user: '',
        conferenceHall: '',
        bookingType: '',
        checkIn: '',
        checkOut: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectConferenceHall = (hall) => {
        setFormData({ ...formData, conferenceHall: hall });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/conferencehall/book', formData);
            alert('Booking successful');
            // Reset form after successful booking
            setFormData({
                user: '',
                conferenceHall: '',
                bookingType: '',
                checkIn: '',
                checkOut: ''
            });
        } catch (error) {
            console.error(error);
            alert('Booking failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Conference Hall Booking</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User:</label>
                    <input type="text" name="user" value={formData.user} onChange={handleChange} />
                </div>
                <div>
                    <label>Conference Hall:</label>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary">
                            {formData.conferenceHall ? formData.conferenceHall : 'Select Conference Hall'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleSelectConferenceHall('Hall A')}>Hall A</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSelectConferenceHall('Hall B')}>Hall B</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSelectConferenceHall('Hall C')}>Hall C</Dropdown.Item>
                            {/* Add more options as needed */}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <label>Booking Type:</label>
                    <input type="text" name="bookingType" value={formData.bookingType} onChange={handleChange} />
                </div>
                <div>
                    <label>Check In:</label>
                    <input type="datetime-local" name="checkIn" value={formData.checkIn} onChange={handleChange} />
                </div>
                <div>
                    <label>Check Out:</label>
                    <input type="datetime-local" name="checkOut" value={formData.checkOut} onChange={handleChange} />
                </div>
                <button type="submit">Book Conference Hall</button>
            </form>
        </div>
    );
};

export default ConferenceHallBook;
