

import React from 'react';
import './Help.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Other content of the Home page */}

      {/* Help Now Section */}
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
          {/* Add more emergency numbers as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
