import React from "react";
import './Affirmations.css';
import affirmationImage1 from '../images/A1.jpg';
import affirmationImage2 from '../images/A2.jpg';
import affirmationImage3 from '../images/A3.jpg';
// Import more images if needed

const Affirmations = ({ imageUrl }) => {
  return (
    <div className="Affirmations">
      <img src={imageUrl} alt="Affirmations" />
    </div>
  );
};

const Affirmation = () => {
  // Array of image URLs for the Affirmations
  const images = [
    affirmationImage1,
    affirmationImage2,
    affirmationImage3,
    // Add more images here if needed
  ];

  return (
    <div className="container" style={{padding:'50px'}}>
      <div className="row">
        {images.slice(0, 3).map((imageUrl, index) => (
          <Affirmations key={index} imageUrl={imageUrl} />
        ))}
      </div>
      <div className="row">
        {images.slice(0, 4).map((imageUrl, index) => (
          <Affirmations key={index + 3} imageUrl={imageUrl} />
        ))}
      </div>
      <div className="row">
        {images.slice(0, 3).map((imageUrl, index) => (
          <Affirmations key={index + 7} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Affirmation;
