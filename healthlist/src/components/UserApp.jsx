/*import React, { useState, useEffect } from 'react';
import './UserApp.css'; // Import CSS file for styling

function UserApp() {
  // State for storing selected service
  const [selectedService, setSelectedService] = useState(null);

  // State for storing selected date and time
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // State for storing user notes or preferences
  const [notes, setNotes] = useState('');

  // Function to handle service selection
  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  // Function to handle date selection
  const handleDateSelection = (event) => {
    setSelectedDate(event.target.value);
  };

  // Function to handle time selection
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  // Function to handle notes change
  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  // Sample service data
  const service = {
    id: 1,
    name: 'Psychiatrist',
    therapist: 'John Doe',
    price: '$50',
    profilePhoto: 'path/to/profile/photo.jpg', // Replace with actual path or URL
  };

  // Select the service by default
  useEffect(() => {
    setSelectedService(service);
  }, []);

  // Sample time options
  const timeOptions = ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

  return (
    <div className="UserApp">
      <div className="card">
        <div className="card-header">Service</div>
        <div className="card-body">
          <div className="service-item">
            <img src={service.profilePhoto} alt={service.therapist} className="therapist-photo" />
            <div>
              <div>{service.name}</div>
              <div>Therapist: {service.therapist}</div>
              <div>Price: {service.price}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Select Date and Time</div>
        <div className="card-body">
          <form>
            <label htmlFor="date">Choose a date:</label>
            <input type="date" id="date" name="date" onChange={handleDateSelection} />
          </form>
        </div>
        <div className="card-body">
          <label>Choose a time:</label>
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelection(time)}
              className={selectedTime === time ? 'selected-time' : ''}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">Booking Details</div>
        <div className="card-body">
          {selectedService && selectedDate && selectedTime ? (
            <div>
              <p>Service: {selectedService.name}</p>
              <p>Therapist: {selectedService.therapist}</p>
              <p>Date: {selectedDate}</p>
              <p>Time: {selectedTime}</p>
              <label htmlFor="notes">Additional Notes or Preferences:</label>
              <textarea
                id="notes"
                name="notes"
                value={notes}
                onChange={handleNotesChange}
                placeholder="Enter any specific notes or preferences for your session"
              />
            </div>
          ) : (
            <p>Please select a service, date, and time</p>
          )}
        </div>
        <button className="payment-button">
          <a href="/price" style={{ color: 'white', textDecoration: 'none' }}>Payment Gateway</a>
        </button>
      </div>
    </div>
  );
}

export default UserApp;
*/

import React, { useState, useEffect } from 'react';
import './UserApp.css'; // Import CSS file for styling

function UserApp() {
  // State for storing selected service
  const [selectedService, setSelectedService] = useState(null);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const [notes, setNotes] = useState('');

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleDateSelection = (event) => {
    setSelectedDate(event.target.value);
  };

  // Function to handle time selection
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  // Function to handle notes change
  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  
  const service = {
    id: 1,
    name: 'Psychiatrist',
    therapist: 'John Doe',
    experience: '5+ years of experience',
    price: '₹1250 for 30 mins',
    profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGm5b5-fLVgCFeoatNB4z3AqaYk5ESpPz1A&s', // Replace with actual path or URL
    expertise: ['Anxiety disorders', 'Bipolar disorder', 'Trauma'],
    languages: ['English', 'Hindi', 'Marathi', 'Malayalam'],
    sessionMode: 'Virtual',
  };

  // Select the service by default
  useEffect(() => {
    setSelectedService(service);
  }, []);

  // Sample time options
  const timeOptions = ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

  return (
    <div className="UserApp">
      <div className="card">
        <div className="card-header">Service</div>
        <div className="card-body">
          <div className="service-item">
            <img src={service.profilePhoto} alt={service.therapist} className="therapist-photo" />
            <div>
              <div className="service-name">{service.name}</div>
              <div className="therapist-name">Dr. {service.therapist}</div>
              <div className="experience">{service.experience}</div>
              <div className="price">Starts @ {service.price}</div>
              <div className="expertise">
                Expertise: {service.expertise.join(', ')}
              </div>
              <div className="languages">
                Speaks: {service.languages.join(', ')}
              </div>
              <div className="session-mode">
                Session Mode: {service.sessionMode}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Select Date and Time</div>
        <div className="card-body">
          <form>
            <label htmlFor="date">Choose a date:</label>
            <input type="date" id="date" name="date" onChange={handleDateSelection} />
          </form>
        </div>
        <div className="card-body">
          <label>Choose a time:</label>
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelection(time)}
              className={selectedTime === time ? 'selected-time' : ''}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">Booking Details</div>
        <div className="card-body">
          {selectedService && selectedDate && selectedTime ? (
            <div>
              <p>Service: {selectedService.name}</p>
              <p>Therapist: {selectedService.therapist}</p>
              <p>Date: {selectedDate}</p>
              <p>Time: {selectedTime}</p>
              <label htmlFor="notes">Additional Notes or Preferences:</label>
              <textarea
                id="notes"
                name="notes"
                value={notes}
                onChange={handleNotesChange}
                placeholder="Enter any specific notes or preferences for your session"
              />
            </div>
          ) : (
            <p>Please select a service, date, and time</p>
          )}
        </div>
        <button className="payment-button">
          <a href="/price" style={{ color: 'white', textDecoration: 'none' }}>Payment Gateway</a>
        </button>
      </div>
    </div>
  );
}

export default UserApp;
