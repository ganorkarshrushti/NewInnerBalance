import React, { useState } from 'react';
import './BookingForm.css';
function BookingForm() {
  const [therapistName, setTherapistName] = useState('');
  const [services, setServices] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [photo, setPhoto] = useState(null);
  const [documents, setDocuments] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the form data to your backend or perform any necessary actions
  };

  return (
    <div className="booking-form">
      <h2>Book a Session</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Therapist Name:
          <input type="text" value={therapistName} onChange={(e) => setTherapistName(e.target.value)} />
        </label>
        <label>
          Services Provided:
          <input type="text" value={services} onChange={(e) => setServices(e.target.value)} />
        </label>
        <label>
          Specialization:
          <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Select Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Select Times:
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Enter multiple times separated by commas" />
        </label>
        <label>
          Upload Photo:
          <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
        </label>
        <label>
          Upload Educational Documents:
          <input type="file" accept=".pdf" onChange={(e) => setDocuments(e.target.files[0])} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;