import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    // State for mood selection
    const [mood, setMood] = useState('');

    // Function to handle mood change
    const handleMoodChange = (selectedMood) => {
        setMood(selectedMood);
    };

    return (
        <div className="home-container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">InnerBalance - The Mental Health Checker</h1>
                    <p className="lead">
                        Embark on a transformative journey with InnerBalance - your trusted companion in mental well-being. Explore a sanctuary of self-care, where each step brings you closer to harmony and fulfillment.
                    </p>
                </div>
            </div>

            {/* Take a Quick-Quiz Section */}
            <section className="assessment-section">
                <div className="container">
                    <h2>Take a Quick-Quiz!</h2>
                    <button className="assessment-button">Take an Assessment Test</button>
                </div>
            </section>

            {/* Mood Tracker Section */}
            <section className="mood-tracker-section">
                <div className="container">
                    <h2>How are you feeling today?</h2>
                    <div className="mood-options">
                        <button onClick={() => handleMoodChange('😊')} className={`mood-option ${mood === '😊' ? 'selected' : ''}`}>😊</button>
                        <button onClick={() => handleMoodChange('😐')} className={`mood-option ${mood === '😐' ? 'selected' : ''}`}>😐</button>
                        <button onClick={() => handleMoodChange('😞')} className={`mood-option ${mood === '😞' ? 'selected' : ''}`}>😞</button>
                        <button onClick={() => handleMoodChange('😡')} className={`mood-option ${mood === '😡' ? 'selected' : ''}`}>😡</button>
                        <button onClick={() => handleMoodChange('😍')} className={`mood-option ${mood === '😍' ? 'selected' : ''}`}>😍</button>
                        {/* Add more emojis as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
