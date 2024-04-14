import React from 'react';
import './Help.css';

const Help = () => {
  // Define the helpline numbers
  const helplineNumbers = [
    {
      id: 1,
      name: 'National Suicide Prevention Lifeline',
      number: '(800) 273-TALK',
    },
    {
      id: 2,
      name: 'Crisis Text Line',
      number: 'Text "HOME" to 741741',
    },
    {
      id: 3,
      name: 'Veterans Crisis Line',
      number: '800-273-8255 (press 1)',
    },
    {
      id: 4,
      name: 'Friendship Line',
      number: '800-971-0016',
    },
    {
      id: 5,
      name: 'SAMHSA',
      number: '800-662-4357 (HELP)',
    },
    {
      id: 6,
      name: 'Samaritans',
      number: '877-870-4673 (HOPE) (call or text)',
    },
    // Add more helpline numbers as needed
  ];

  return (
    <div className="help-container">
      {/* Other content of the Help page */}
      <section className="help-now-section">
        <h2>Need Help Now?</h2>
        <p>If you are in crisis or need immediate assistance, please reach out to one of the following helplines:</p>
        <div className="emergency-numbers">
          {/* Map through helpline numbers and display each */}
          {helplineNumbers.map((helpline) => (
            <div className="emergency-number" key={helpline.id}>
              <h3>{helpline.name}</h3>
              <p>{helpline.number}</p>
            </div>
          ))}
        </div>
        <div className="helpline-slider">
          {/* Slider for helpline numbers */}
          {helplineNumbers.map((helpline) => (
            <div className="helpline-number" key={helpline.id}>
              <h3>{helpline.name}</h3>
              <p>{helpline.number}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Help;



/*
import React from 'react';
import './Help.css';

const Home = () => {
  return (
    <div className="home-container">
    
      <section className="help-now-section">
        <h2>Need Help Now?</h2>
        <p>If you are in crisis or need immediate assistance, please reach out to one of the following helplines:</p>
        <div className="emergency-numbers">
          <div className="emergency-number">
            <h3>National Suicide Prevention Lifeline</h3>
            <p>Call: <a href="tel:1-800-273-TALK">(800) 273-TALK</a></p>
          </div>
          <div className="emergency-number">
            <h3>Crisis Text Line</h3>
            <p>Text "HOME" to <a href="sms:741741">741741</a></p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
*/
