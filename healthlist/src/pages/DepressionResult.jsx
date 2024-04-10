import React from "react";

const DepressionResult = ({ score }) => {
  return (
    <div className="result-container">
      <h3>Additional Information:</h3>
      <p>
        {score <= 10 && "You may be experiencing mild symptoms of depression. Consider reaching out to a mental health professional for support."}
        {score > 10 && score <= 20 && "Your symptoms suggest moderate depression. It's important to seek help from a healthcare provider to address your concerns."}
        {score > 20 && score <= 30 && "Your symptoms indicate severe depression. Please seek immediate assistance from a mental health professional or call a crisis helpline for support."}
        {score > 30 && "Your score suggests critical levels of depression. It's crucial to seek urgent help from a mental health professional or contact emergency services immediately."}
      </p>
      <p>
        Remember, you are not alone, and there are people who can help you through this difficult time. Reach out to friends, family, or support groups for assistance and guidance.
      </p>
    </div>
  );
};

export default DepressionResult;
