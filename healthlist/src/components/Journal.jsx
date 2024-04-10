
import React, { useState } from 'react';
import './Journal.css'; 

const Journal = () => {
  const [entry, setEntry] = useState('');

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const saveEntry = () => {
    
    console.log('Entry saved:', entry);
   
    setEntry('');
  };

  return (
    <div className="journal-container">
      <div className="journal-info">
        <h2 className="text-center mb-4">Journaling for Mental Health Strugglers</h2>
        <p>
          Journaling is a therapeutic practice that can greatly benefit individuals
          struggling with mental health issues. It provides a safe space for expressing
          emotions, organizing thoughts, and gaining insights into one's experiences.
          Regular journaling can help reduce stress, improve mood, and promote emotional
          healing.
        </p>
      </div>
      <div className="journal-card">
        <h2 className="text-center mb-4">Journal</h2>
        <textarea
          className="form-control mb-3"
          rows="5"
          value={entry}
          onChange={handleInputChange}
          placeholder="Write about your day..."
        />
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={saveEntry}>Save Entry</button>
        </div>
      </div>
    </div>
  );
};

export default Journal;
