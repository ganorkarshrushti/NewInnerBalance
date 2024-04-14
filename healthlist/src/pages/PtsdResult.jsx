// PtsdResult.jsx
import React from "react";

const PtsdResult = ({ score }) => {
  return (
    <div className="result-container">
      <h3>Additional Information:</h3>
      <p>
        {score <= 10 && "Your PTSD level is very low. Keep up the good work in managing your stress."}
        {score > 10 && score <= 20 && "You are experiencing mild PTSD. Consider practicing relaxation techniques or seeking support if needed."}
        {score > 20 && score <= 30 && "Your PTSD level is moderate. It may be helpful to explore stress-reduction strategies or talk to a mental health professional."}
        {score > 30 && "Your PTSD level is severe. It's important to seek professional help and support to manage your symptoms effectively."}
      </p>
      
      <p>
        If you need support, consider reaching out to a trusted friend, family member, or mental health professional. Remember, you are not alone, and help is available.
      </p>
    </div>
  );
};

export default PtsdResult;
