import React, { useState } from 'react';

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
    <div>
      <h2>Journal</h2>
      <textarea
        rows="5"
        cols="50"
        value={entry}
        onChange={handleInputChange}
        placeholder="Write about your day..."
      />
      <br />
      <button onClick={saveEntry}>Save Entry</button>
    </div>
  );
};

export default Journal;
