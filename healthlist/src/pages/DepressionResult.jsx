import React from "react";

const DepressionResult = ({ score }) => {
  return (
    <div className="result-container">
      <h3>Additional Information:</h3>
      <p>
        {score <= 10 && "Your depression level is very low. Keep up the good work in maintaining your mental health."}
        {score > 10 && score <= 20 && "You are experiencing mild depression. Consider reaching out to a therapist or counselor for support."}
        {score > 20 && score <= 30 && "Your depression level is moderate. It may be beneficial to seek professional help and explore treatment options."}
        {score > 30 && "Your depression level is severe. Please seek immediate help from a mental health professional or contact a crisis hotline."}
      </p>
      
      <p>
        If you need support, remember that there are people who care about you and resources available to help you through this difficult time.
      </p>
    </div>
  );
};

export default DepressionResult;
