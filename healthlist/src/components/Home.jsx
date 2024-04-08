// import React, { useState } from 'react';
// // import './Home.css';
// import styles from './Home.module.css';

// const Home = () => {
//     // State for mood selection
//     const [mood, setMood] = useState('');

//     // Function to handle mood change
//     const handleMoodChange = (selectedMood) => {
//         setMood(selectedMood);
//     };

//     return (
//         <div className={styles['home-container']}>
//         <div className={styles.jumbotron}>
//                 <div className="container">
//                     <h1 className="display-4">InnerBalance - The Mental Health Checker</h1>
//                     <p className="lead">
//                         Embark on a transformative journey with InnerBalance - your trusted companion in mental well-being. Explore a sanctuary of self-care, where each step brings you closer to harmony and fulfillment.
//                     </p>
//                 </div>
//             </div>

//             {/* Take a Quick-Quiz Section */}
//             <section className="assessment-section">
//                 <div className="container">
//                     <h2>Take a Quick-Quiz!</h2>
//                     <button className="assessment-button">Take an Assessment Test</button>
//                 </div>
//             </section>

//             {/* Mood Tracker Section */}
//             <section className="mood-tracker-section">
//                 <div className="container">
//                     <h2>How are you feeling today?</h2>
//                     <div className="mood-options">
//                         <button onClick={() => handleMoodChange('😊')} className={`mood-option ${mood === '😊' ? 'selected' : ''}`}>😊</button>
//                         <button onClick={() => handleMoodChange('😐')} className={`mood-option ${mood === '😐' ? 'selected' : ''}`}>😐</button>
//                         <button onClick={() => handleMoodChange('😞')} className={`mood-option ${mood === '😞' ? 'selected' : ''}`}>😞</button>
//                         <button onClick={() => handleMoodChange('😡')} className={`mood-option ${mood === '😡' ? 'selected' : ''}`}>😡</button>
//                         <button onClick={() => handleMoodChange('😍')} className={`mood-option ${mood === '😍' ? 'selected' : ''}`}>😍</button>
//                         {/* Add more emojis as needed */}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;
// import React, { useState } from 'react';
// import styles from './Home.module.css';

// const Home = () => {
//     // State for mood selection
//     const [mood, setMood] = useState('');

//     // Function to handle mood change
//     const handleMoodChange = (selectedMood) => {
//         setMood(selectedMood);
//     };

//     return (
//         <div >
//         <div className={styles['home-container']}>
//             <div className={styles.jumbotron}>
//                 <div className="container">
//                     <h1 className="display-4">InnerBalance - The Mental Health Checker</h1>
//                     <p className="lead">
//                         Embark on a transformative journey with InnerBalance - your trusted companion in mental well-being. Explore a sanctuary of self-care, where each step brings you closer to harmony and fulfillment.
//                     </p>
//                 </div>
//             </div>   
//         </div>

//           {/* Take a Quick-Quiz Section */}
//            <section className="assessment-section">
//                 <div className="container">
//                     <h2>Take a Quick-Quiz!</h2>
//                    <button className="assessment-button">Take an Assessment Test</button>
//                </div>
//            </section>

//            {/* Mood Tracker Section */}
//            <section className="mood-tracker-section">
//                <div className="container">
//                     <h2>How are you feeling today?</h2>
//                     <div className="mood-options">
//                         <button onClick={() => handleMoodChange('😊')} className={`mood-option ${mood === '😊' ? 'selected' : ''}`}>😊</button>
//                       <button onClick={() => handleMoodChange('😐')} className={`mood-option ${mood === '😐' ? 'selected' : ''}`}>😐</button>                        <button onClick={() => handleMoodChange('😞')} className={`mood-option ${mood === '😞' ? 'selected' : ''}`}>😞</button>
//                        <button onClick={() => handleMoodChange('😡')} className={`mood-option ${mood === '😡' ? 'selected' : ''}`}>😡</button>
//                       <button onClick={() => handleMoodChange('😍')} className={`mood-option ${mood === '😍' ? 'selected' : ''}`}>😍</button>
//                        {/* Add more emojis as needed */}
//                    </div>
//               </div>
//             </section>

//         </div>
        
//     );
// };

// export default Home;

/*(7 april)
import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
    // State for mood selection
    const [mood, setMood] = useState('');

    // Function to handle mood change
    const handleMoodChange = (selectedMood) => {
        setMood(selectedMood);
    };

    return (
        <div className={styles['home-container']} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="container text-center">
                <h1 className="display-4 mb-4">InnerBalance - The Mental Health Checker</h1>
                <p className="lead">
                    Embark on a transformative journey with InnerBalance - your trusted companion in mental well-being. Explore a sanctuary of self-care, where each step brings you closer to harmony and fulfillment.
                </p>
            </div>

            
            <section className="assessment-section bg-light py-5 text-center">
                <div className="container">
                    <h2>Take a Quick-Quiz!</h2>
                    <button className="btn btn-lg btn-primary mt-3">Take an Assessment Test</button>
                </div>
            </section>

           
            <section className="mood-tracker-section bg-light py-5 text-center">
                <div className="container">
                    <h2>How are you feeling today?</h2>
                    <div className="mood-options mt-4">
                        <button onClick={() => handleMoodChange('😊')} className={`mood-option btn ${mood === '😊' ? 'selected btn-success' : 'btn-outline-success'}`}>😊</button>
                        <button onClick={() => handleMoodChange('😐')} className={`mood-option btn ${mood === '😐' ? 'selected btn-warning' : 'btn-outline-warning'}`}>😐</button>
                        <button onClick={() => handleMoodChange('😞')} className={`mood-option btn ${mood === '😞' ? 'selected btn-danger' : 'btn-outline-danger'}`}>😞</button>
                        <button onClick={() => handleMoodChange('😡')} className={`mood-option btn ${mood === '😡' ? 'selected btn-secondary' : 'btn-outline-secondary'}`}>😡</button>
                        <button onClick={() => handleMoodChange('😍')} className={`mood-option btn ${mood === '😍' ? 'selected btn-info' : 'btn-outline-info'}`}>😍</button>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
*/

//2 (7 apr)without bg
/*import React, { useState } from 'react';
import styles from './Home.module.css';


const Home = () => {
    // State for mood selection
    const [mood, setMood] = useState('');

    // Function to handle mood change
    const handleMoodChange = (selectedMood) => {
        setMood(selectedMood);
    };

    return (
        <div className={styles['home-container']} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="container text-center">
                <h1 className="display-4 mb-4 text-primary">InnerBalance - The Mental Health Checker</h1>
                <p className="lead">
                    Embark on a transformative journey with InnerBalance - your trusted companion in mental well-being. Explore a sanctuary of self-care, where each step brings you closer to harmony and fulfillment.
                </p>
            </div>

           
            <section className="assessment-section bg-light py-5 text-center">
                <div className="container">
                    <h2 className="text-primary">Take a Quick-Quiz!</h2>
                    <button className="btn btn-lg btn-primary mt-3">Take an Assessment Test</button>
                </div>
            </section>

        
            <section className="mood-tracker-section bg-light py-5 text-center">
                <div className="container">
                    <h2 className="text-primary">How are you feeling today?</h2>
                    <div className="mood-options mt-4">
                        <button onClick={() => handleMoodChange('😊')} className={`mood-option btn ${mood === '😊' ? 'selected btn-success' : 'btn-outline-success'}`}>😊</button>
                        <button onClick={() => handleMoodChange('😐')} className={`mood-option btn ${mood === '😐' ? 'selected btn-warning' : 'btn-outline-warning'}`}>😐</button>
                        <button onClick={() => handleMoodChange('😞')} className={`mood-option btn ${mood === '😞' ? 'selected btn-danger' : 'btn-outline-danger'}`}>😞</button>
                        <button onClick={() => handleMoodChange('😡')} className={`mood-option btn ${mood === '😡' ? 'selected btn-secondary' : 'btn-outline-secondary'}`}>😡</button>
                        <button onClick={() => handleMoodChange('😍')} className={`mood-option btn ${mood === '😍' ? 'selected btn-info' : 'btn-outline-info'}`}>😍</button>
                       
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
*/

//with bg img (7apr)
import React, { useState } from 'react';
import styles from './Home.module.css';

// Import your background image
import bghome from '../images/blue bg.jpg';

const Home = () => {
    // State for mood selection
    const [mood, setMood] = useState('');

    // Function to handle mood change
    const handleMoodChange = (selectedMood) => {
        setMood(selectedMood);
    };

    return (
        <div className={styles['home-container']} style={{ backgroundImage: `url(${bghome})`, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container text-center">
                <h1 className="display-4 mb-4 text-dark">InnerBalance - The Mental Health Checker</h1>
                <p className="lead">
                    Embark on a transformative journey with InnerBalance - your trusted companion in mental well-being. Explore a sanctuary of self-care, where each step brings you closer to harmony and fulfillment.
                </p>
            </div>

            {/* Take a Quick-Quiz Section */}
            <section className="assessment-section bg-light py-5 text-center">
                <div className="container">
                    <h2 className="text-primary">Take a Quick-Quiz!</h2>
                    <button className="btn btn-lg btn-primary mt-3">Take an Assessment Test</button>
                </div>
            </section>

            {/* Mood Tracker Section */}
            <section className="mood-tracker-section bg-light py-5 text-center">
                <div className="container">
                    <h2 className="text-primary">How are you feeling today?</h2>
                    <div className="mood-options mt-4">
                        <button onClick={() => handleMoodChange('😊')} className={`mood-option btn ${mood === '😊' ? 'selected btn-success' : 'btn-outline-success'}`}>😊</button>
                        <button onClick={() => handleMoodChange('😐')} className={`mood-option btn ${mood === '😐' ? 'selected btn-warning' : 'btn-outline-warning'}`}>😐</button>
                        <button onClick={() => handleMoodChange('😞')} className={`mood-option btn ${mood === '😞' ? 'selected btn-danger' : 'btn-outline-danger'}`}>😞</button>
                        <button onClick={() => handleMoodChange('😡')} className={`mood-option btn ${mood === '😡' ? 'selected btn-secondary' : 'btn-outline-secondary'}`}>😡</button>
                        <button onClick={() => handleMoodChange('😍')} className={`mood-option btn ${mood === '😍' ? 'selected btn-info' : 'btn-outline-info'}`}>😍</button>
                        {/* Add more emojis as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
