// UserApp.js
import React, { useState } from 'react';
import './UserApp.css'; // Import CSS file for styling
import quiz2Image from '../images/user1.png';
import quiz3Image from '../images/user3.jpg';

function UserApp() {
  // State for storing selected services
  const [selectedServices, setSelectedServices] = useState([]);

  // State for storing selected date and time
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Function to handle service selection
  const handleServiceSelection = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(item => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Function to handle date selection
  const handleDateSelection = (event) => {
    setSelectedDate(event.target.value);
  };

  // Function to handle time selection
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  // Sample services data
  const services = [
    { id: 1, name: 'Depression', therapist: 'John Doe', price: '$50', profilePhoto: '/user2.png'},
    { id: 2, name: 'BetterHelp', therapist: 'Jane Smith', price: '$60', profilePhoto: 'jane-smith.jpg' },
    { id: 3, name: 'Talkspace', therapist: 'Alex Johnson', price: '$70', profilePhoto: 'alex-johnson.jpg' },
  ];

  // Sample time options
  const timeOptions = ['1:00 PM', '2:00 PM', '3:00 PM' , '4:00 PM', '5:00 PM', '6:00 PM'];

  return (
    <div className="UserApp">
      <div className="card">
        <div className="card-header">Services</div>
        <div className="card-body">
          {services.map(service => (
            <div key={service.id} className="service-item">
              <input
                type="checkbox"
                id={`service-${service.id}`}
                checked={selectedServices.includes(service)}
                onChange={() => handleServiceSelection(service)}
              />
              <label htmlFor={`service-${service.id}`}>
                <img src={service.profilePhoto} alt={service.therapist} className="therapist-photo" />
                <div>
                  <div>{service.name}</div>
                  <div>Therapist: {service.therapist}</div>
                  <div>Price: {service.price}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">Select Date and Time</div>
        <div className="card-body">
          <form>
            <label htmlFor="date">Choose a date:</label><br />
            <input type="date" id="date" name="date" onChange={handleDateSelection} />
          </form>
        </div>
       
        <div className="card-body">
          <label>Choose a time:</label><br />
          {timeOptions.map(time => (
            <button
              key={time}
              onClick={() => handleTimeSelection(time)}
              style={{
                margin: '10px',
                backgroundColor: selectedTime === time ? '#007bff' : '#fff',
                color: selectedTime === time ? '#fff' : '#007bff',
                border: selectedTime === time ? 'none' : '1px solid #007bff',
                borderRadius: '4px',
                padding: '10px 20px',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">Booking Details</div>
        <div className="card-body">
          Your booking details form can go here
          <div className="card-header" style={{paddingTop:'35vh',backgroundColor:'white',color:'black'}}>
            Total : <p>**Display total amount here</p>
          </div>
        </div>
        <button className="payment-button">
          <a href="/price" style={{ color: 'white', textDecoration: 'none' }}>Payment Gateway</a>
        </button>
      </div>
    </div>
  );
}

export default UserApp;
