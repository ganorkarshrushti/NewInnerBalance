import React from 'react';
import quiz2Image from '../images/user3.jpg';
/*import quiz3Image from '../images/Therapist.jpg';*/
const Therapist = () => {

  return (
    <div style={styles.card}>
      <img src={quiz3Image} alt="Therapist Icon" style={styles.image} />
      <h2 style={styles.heading}>Therapist</h2>
      <button style={styles.button}><a href="/bookingform" style={{ color: 'white', textDecoration: 'none' }}>Add Profile </a></button>
    </div>
  );
};

const UserCard = () => {
  const handleUserClick = () => {
    // Handle user button click
  };

  return (
    <div style={styles.card}>
      <img src={quiz2Image} alt="User Icon" style={styles.image} />
      <h2 style={styles.heading}>User</h2>
      <button style={styles.button}><a href="/userapp" style={{ color: 'white', textDecoration: 'none' }}>Book an Appointment </a></button>
    </div>
  );
};

const  TherapistCard = () => {
  return (
    <div style={styles.container}>
    
      <UserCard />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    paddingLeft: '80vh',
    paddingTop:'12vh',
    height: '60vh',
    
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '30px',
    margin: '10px',
    width:'55vh',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  heading: {
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

};

export default TherapistCard;