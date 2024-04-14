import React from "react";

const OcdResult = ({ score }) => {
  return (
    <div className="result-container">
      <h3>Additional Information:</h3>
      <p>
        {score <= 10 && "Your OCD symptoms appear to be minimal. Keep an eye on them and seek help if they worsen."}
        {score > 10 && score <= 20 && "You are experiencing mild OCD symptoms. Consider implementing coping strategies or seeking professional guidance."}
        {score > 20 && score <= 30 && "Your OCD symptoms are moderate. It's recommended to seek professional help to manage and alleviate your symptoms effectively."}
        {score > 30 && "Your OCD symptoms are severe. It's crucial to seek immediate professional support to address and treat your symptoms."}
      </p>
      
      <p>
        Remember that OCD can be effectively managed with proper treatment and support. Don't hesitate to reach out to mental health professionals for assistance.
      </p>
    </div>
  );
};

export default OcdResult;
