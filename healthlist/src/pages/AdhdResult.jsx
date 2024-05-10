import React from "react";

const AdhdResult = ({ score }) => {
  return (
    <div className="result-container">
      <h3>Additional Information:</h3>
      <p>
        {score <= 10 && "Your ADHD symptoms are minimal. Keep up the good work in managing your attention and focus."}
        {score > 10 && score <= 20 && "You are experiencing mild ADHD symptoms. Consider implementing organizational strategies and seeking support if needed."}
        {score > 20 && score <= 30 && "Your ADHD symptoms are moderate. It may be helpful to establish routines and explore techniques to improve focus and attention."}
        {score > 30 && "Your ADHD symptoms are severe. It's important to seek professional help and support to manage your symptoms effectively."}
      </p>
      
      <p>
        If you need support, consider reaching out to a trusted friend, family member, or mental health professional. Remember, you are not alone, and help is available.
      </p>
    </div>
  );
};

export default AdhdResult;
