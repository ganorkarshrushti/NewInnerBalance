import React from "react";

const SocialResult = ({ score }) => {
  return (
    <div className="result-container">
      <h3>Additional Information:</h3>
      <p>
        {score <= 10 && "Your social anxiety level is very low. You seem to feel comfortable in social situations."}
        {score > 10 && score <= 20 && "You are experiencing mild social anxiety. Consider practicing social skills and gradually exposing yourself to social situations."}
        {score > 20 && score <= 30 && "Your social anxiety level is moderate. It may be helpful to seek support from a therapist or counselor to address your social fears."}
        {score > 30 && "Your social anxiety level is severe. It's important to seek professional help and support to manage your social anxiety effectively."}
      </p>
      
      <p>
        If you need support, consider reaching out to a trusted friend, family member, or mental health professional. Remember, you are not alone, and help is available.
      </p>
    </div>
  );
};

export default SocialResult;
