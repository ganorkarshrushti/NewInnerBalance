/*import React from "react";
import './Affirmations.css';

const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="card" />
    </div>
  );
};

const Affirmation = () => {
  // Array of image URLs for the cards
  const images = [
    "https://i.pinimg.com/236x/5e/3e/10/5e3e10024b9e0b117e4497b2ebcffb8f.jpg",
    "https://i.pinimg.com/474x/f6/c7/e6/f6c7e636eb57dadbd4d50d5f8ea82e27.jpg",
    "https://i.pinimg.com/236x/38/0d/6d/380d6dc9ab3c0e702aa63402e2296c10.jpg",
    "https://i.pinimg.com/236x/36/a0/d6/36a0d6648e1782585d5202a45db25581.jpg",
    "https://i.pinimg.com/564x/6e/f7/f0/6ef7f06603a74a4f4d611d0c705afa5d.jpg",
    "https://i.pinimg.com/236x/5b/8c/c3/5b8cc3562278af5a1dbefe04c444bed0.jpg",
    "https://i.pinimg.com/236x/9b/da/e9/9bdae94aa067c566785f2097870d2d38.jpg",
    "https://i.pinimg.com/236x/94/3e/2f/943e2f71a3323d8c62591d6602215a89.jpg",
    "https://i.pinimg.com/236x/73/1b/40/731b40aa82944ce015185237496f499f.jpg",
    "https://i.pinimg.com/236x/bd/cf/ff/bdcfff7937071ab68552607c4a65b0fb.jpg",
    "https://i.pinimg.com/236x/ab/94/d8/ab94d8a98cfed2ce9a8aa2dda4217751.jpg",
    "https://i.pinimg.com/474x/50/1c/25/501c2510dad2d090c1fcdb4bd669c6ec.jpg",
    "https://i.pinimg.com/236x/74/10/00/7410002445230ccbeeb0838f1c9bb716.jpg",
    "https://i.pinimg.com/236x/6a/40/44/6a4044c5320e99156f4dd8b0f145b642.jpg",
    "https://i.pinimg.com/236x/93/69/bb/9369bb743132d88706c55cd4b47a0b73.jpg",
    "https://i.pinimg.com/236x/6e/5d/15/6e5d152389b0da9dbdb045b029d3d0db.jpg",
    "https://i.pinimg.com/236x/3a/6e/46/3a6e46c08cedcb9240815cc2753e555b.jpg",
    // Add more image URLs here
  ];

  return (
    <div className="container" style={{ padding: '50px' }}>
      <div className="row">
        {images.slice(0, 3).map((imageUrl, index) => (
          <Card key={index} imageUrl={imageUrl} />
        ))}
      </div>
      <div className="row">
        {images.slice(3, 7).map((imageUrl, index) => (
          <Card key={index + 3} imageUrl={imageUrl} />
        ))}
      </div>
      <div className="row">
        {images.slice(7, 10).map((imageUrl, index) => (
          <Card key={index + 7} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Affirmation; */
import React from "react";
import './Affirmations.css';

const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="card" />
    </div>
  );
};

const Affirmation = () => {
  // Array of image URLs for the cards
  const images = [
    "https://i.pinimg.com/236x/5e/3e/10/5e3e10024b9e0b117e4497b2ebcffb8f.jpg",
    "https://i.pinimg.com/474x/f6/c7/e6/f6c7e636eb57dadbd4d50d5f8ea82e27.jpg",
    "https://i.pinimg.com/236x/38/0d/6d/380d6dc9ab3c0e702aa63402e2296c10.jpg",
    "https://i.pinimg.com/236x/36/a0/d6/36a0d6648e1782585d5202a45db25581.jpg",
    "https://i.pinimg.com/564x/6e/f7/f0/6ef7f06603a74a4f4d611d0c705afa5d.jpg",
    "https://i.pinimg.com/236x/5b/8c/c3/5b8cc3562278af5a1dbefe04c444bed0.jpg",
    "https://i.pinimg.com/236x/9b/da/e9/9bdae94aa067c566785f2097870d2d38.jpg",
    "https://i.pinimg.com/236x/94/3e/2f/943e2f71a3323d8c62591d6602215a89.jpg",
    "https://i.pinimg.com/474x/e6/fb/be/e6fbbef8b1d610fe5c976cc14fcce4ca.jpg",
    "https://i.pinimg.com/236x/bd/cf/ff/bdcfff7937071ab68552607c4a65b0fb.jpg",
    "https://i.pinimg.com/236x/ab/94/d8/ab94d8a98cfed2ce9a8aa2dda4217751.jpg",
    "https://i.pinimg.com/474x/50/1c/25/501c2510dad2d090c1fcdb4bd669c6ec.jpg",
    "https://i.pinimg.com/236x/74/10/00/7410002445230ccbeeb0838f1c9bb716.jpg",
    "https://i.pinimg.com/236x/6a/40/44/6a4044c5320e99156f4dd8b0f145b642.jpg",
    "https://i.pinimg.com/236x/93/69/bb/9369bb743132d88706c55cd4b47a0b73.jpg",
    "https://i.pinimg.com/236x/6e/5d/15/6e5d152389b0da9dbdb045b029d3d0db.jpg",
    "https://i.pinimg.com/474x/20/77/04/207704db0fd64e0e61197981096e1441.jpg",
    "https://i.pinimg.com/736x/44/3c/69/443c694dbaf15c3e08214431c0b89dee.jpg",
    "https://i.pinimg.com/236x/cc/1e/03/cc1e03d49682821af013bb420823636a.jpg",
    // Add more image URLs here
  ];

  // Calculate the number of slices required based on the number of images
  const numSlices = Math.ceil(images.length / 4);

  // Create an array of slice indices
  const sliceIndices = Array.from({ length: numSlices }, (_, i) => i * 4);

  return (
    <div className="container" style={{ padding: '50px' }}>
      {sliceIndices.map((startIndex, sliceIndex) => (
        <div key={sliceIndex} className="row">
          {images.slice(startIndex, startIndex + 4).map((imageUrl, index) => (
            <Card key={startIndex + index} imageUrl={imageUrl} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Affirmation;

