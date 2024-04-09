
/*import React, { useState } from 'react';
const Journal = () => {
  const [entry, setEntry] = useState('');

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const saveEntry = () => {
    // You can implement the logic to save the journal entry here
    console.log('Entry saved:', entry);
    // Optionally, you can clear the input field after saving
    setEntry('');
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-3">
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
*/import React, { useState } from 'react';
import './Journal.css'; // Import CSS for styling transitions

const Journal = () => {
  const [entry, setEntry] = useState('');

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const saveEntry = () => {
    // You can implement the logic to save the journal entry here
    console.log('Entry saved:', entry);
    // Optionally, you can clear the input field after saving
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
