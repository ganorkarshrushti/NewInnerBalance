
import React, { useState } from 'react';
import './Journal.css'; 
const Journal = () => {
  const [entry, setEntry] = useState('');
  const [savedEntries, setSavedEntries] = useState([]);
  const [check, setCheck] = useState(true);

  React.useEffect(() => {
    if (check) {
      setCheck(false);
      fetch("http://localhost:5000/journal/view", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "accept": "/",
        },
      })
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        if (res.data && Array.isArray(res.data)) {
          // Check if res.data is an array
          setSavedEntries(res.data.map(item => item.entry));
        } else {
          // If res.data is not an array or does not exist, initialize savedEntries as an empty array
          setSavedEntries([]);
        }
      })
      .catch(error => {
        console.error("Error fetching saved entries:", error);
      });
    }
  }, [check]);

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const saveEntry = async () => {
    if (entry.trim() !== '') {
      setSavedEntries([...savedEntries, entry]);
      // Save entry only if it's not empty
      await fetch("http://localhost:5000/journal/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "/",
        },
        body: JSON.stringify({
          entry: entry
        }),
      })
      .then(res => res.json())
      .then(Res => console.log(Res))
      .catch(error => {
        console.error("Error saving entry:", error);
      });

      setEntry('');
    }
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
      <div className="saved-entries">
        <h2 className="text-center mb-4">Saved Entries</h2>
        <ul>
          {savedEntries.map((savedEntry, index) => (
            <li key={index}>{savedEntry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Journal;
