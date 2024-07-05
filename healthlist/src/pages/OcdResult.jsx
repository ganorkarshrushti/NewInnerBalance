

import React from "react";

const OcdResult = ({ score }) => {
  let resultText;

  if (score <= 10) {
    resultText = "Your Ocd symptoms are minimal. Keep up the good work in managing your attention and focus.";
  } else if (score > 10 && score <= 20) {
    resultText = "You are experiencing mild OCD symptoms. Consider implementing organizational strategies and seeking support if needed.";
  } else if (score > 20 && score <= 30) {
    resultText = "Your OCD symptoms are moderate. It may be helpful to establish routines and explore techniques to improve focus and attention.";
  } else {
    resultText = "Your OCD  symptoms are severe. It's important to seek professional help and support to manage your symptoms effectively.";
  }

  return (
    <div className="result-container">
      <h3>Additional Information:</h3>
      <p>
        <strong>{resultText}</strong>
      </p>
      <p>
        If you need support, consider reaching out to a trusted friend, family member, or mental health professional. Remember, you are not alone, and help is available.
      </p>
      <div className="help-box">
        <p>Need help?</p>
        <p>Connect with our Chatbot service to work through any questions or concerns that you might have.</p>
        <a href="/chatbot" className="chat-button">Chat Here</a>
      </div>
    </div>
  );
};

export default OcdResult;



