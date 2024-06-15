

import React from "react";

const DepressionResult = ({ score }) => {
  let resultText;

  if (score <= 10) {
    resultText = "Your Depression symptoms are minimal. Keep up the good work in managing your attention and focus.";
  } else if (score > 10 && score <= 20) {
    resultText = "You are experiencing mild Depression symptoms. Consider implementing organizational strategies and seeking support if needed.";
  } else if (score > 20 && score <= 30) {
    resultText = "Your Depression symptoms are moderate. It may be helpful to establish routines and explore techniques to improve focus and attention.";
  } else {
    resultText = "Your Depression symptoms are severe. It's important to seek professional help and support to manage your symptoms effectively.";
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
    </div>
  );
};

export default DepressionResult;



