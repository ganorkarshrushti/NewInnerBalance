
import React from 'react';
import styles from './Home.module.css';
import bghome from '../images/perfectbg.jpg';
import image1 from '../images/quizz.jpg';
import image2 from '../images/carem.jpg';
import image3 from '../images/faq.jpg';

const Home = () => {
    return (
        <div className={styles['home-container']} style={{ backgroundImage: `url(${bghome})`, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container text-center" style={{ paddingTop: '90px' }}>
                <h1 className="display-4 mb-4 text-dark">InnerBalance - The Mental Health Checker</h1>
                <p className="lead">
                    Embark on a transformative journey with InnerBalance - your trusted companion in mental well-being. Explore a sanctuary of self-care, where each step brings you closer to harmony and fulfillment.
                </p>
                <a href="/" className={styles['get-started-btn']}>Get Started</a>
            </div>
         
            <div className={styles['content-block-container']} style={{ paddingTop: '60px' }}>
               
                <div className={styles['content-block']}>
                    <img src={image1} alt="Image 1" />
                    <div className={styles['text']}>
                        <h2>Take Our Diagnostic Quizzes</h2>
                        <p>Discover our diagnostic quizzes designed to help you evaluate your mental well-being. Take a moment to explore and gain insights into your mental health.</p>
                        <a href="/quiz" className={styles['learn-more-btn']}>
                            Take a Quick Quiz
                        </a>
                    </div>
                </div>
                
                <div className={styles['content-block']}>
                    <img src={image2} alt="Image 2" />
                    <div className={styles['text']}>
                        <h2>Mental Disorders</h2>
                        <p>Gain meaningful insights into mental disorders and their repercussions on individuals and society. Dive into our specialized page to delve deeper into mental health challenges and discover articles that offer solutions.</p>
                        <a href="/articles" className={styles['learn-more-btn']}>
                            Read Articles
                        </a>
                    </div>
                </div>
               
                <div className={styles['content-block']}>
                    <img src={image3} alt="Image 3" />
                    <div className={styles['text']}>
                        <h2>FAQs</h2>
                        <p>
Step into the realm of our page's FAQs, where a treasure trove of eloquently phrased answers awaits your exploration.</p>
                        <a href="/faq" className={styles['learn-more-btn']}>
                            Explore Faqs
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;








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

/*

//with bg img (7apr)
import React, { useState } from 'react';
import styles from './Home.module.css';

// Import your background image
import bghome from '../images/perfectbg.jpg';

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

           

        </div>
    );
};

export default Home;


*/




/* Thik thik 
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../images/Ocd.jpg";
import image2 from "../images/Mindpuzzle.jpg";
import image3 from "../images/anxiety.jpg";
import styles from './Home.module.css';

// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const contentData = [
  {
    imageSrc: image1,
    title: "Who We Are",
    text: "Discover more about our organization and learn about our mission and initiatives to make a positive impact on mental health and well-being.",
    link: "/",
  },
  {
    imageSrc: image2,
    title: "Take Our Diagnostic Quizzes",
    text: "Discover our diagnostic quizzes designed to help you evaluate your mental well-being. Take a moment to explore and gain insights into your mental health.",
    link: "/quiz",
  },
  {
    imageSrc: image3,
    title: "Mental Disorders",
    text: "Discover valuable insights into mental disorders and their impact on individuals and society. Explore our dedicated page to learn more about mental health challenges and ways to address them.",
    link: "/articles",
  },
];

function TextWrapper({ children }) {
  const text = useScroll();

  const opacity = useTransform(text.scrollYProgress, [1, 0.8, 0], [1, 1, 0.8]);
  const x = useTransform(text.scrollYProgress, [1, 0.6, 0], [0, 0, -1500]);

  return (
    <motion.div ref={text} className="text-section" style={{ opacity, x }}>
      {children}
    </motion.div>
  );
}

function Home_info() {
  return (
    <div className="container">
      <div className="row">
        {contentData.map((content, index) => (
          <div className="col-md-12 mb-4" key={index}>
            <div className="card">
              <TextWrapper>
                <motion.img
                  src={content.imageSrc}
                  alt={content.title}
                  className="card-img-top"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              </TextWrapper>
              <div className="card-body">
                <h5 className="card-title">{content.title}</h5>
                <p className="card-text">{content.text}</p>
                <a href={content.link} className="btn btn-primary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home_info;
*/


/* 
import React from 'react';
import styles from './Home.module.css';

// Import your background image
import bghome from '../images/perfectbg.jpg';

const Home = () => {
    return (
        <div className={styles['home-container']} style={{ backgroundImage: `url(${bghome})`, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container text-center">
                <h1 className="display-4 mb-4 text-dark">InnerBalance - The Mental Health Checker</h1>
                <p className="lead">
                    Embark on a transformative journey with InnerBalance - your trusted companion in mental well-being. Explore a sanctuary of self-care, where each step brings you closer to harmony and fulfillment.
                </p>
            </div>
          
            <div className={styles['content-block-container']}>
                
                <div className={styles['content-block']}>
                    <img src="anxiety.jpg" alt="Image 1" />
                    <div className={styles['text']}>
                        <h2>Title 1</h2>
                        <p>Description 1</p>
                        <a href="/quiz" className={styles['learn-more-btn']}>
                            Learn More
                        </a>
                    </div>
                </div>
              -
                <div className={styles['content-block']}>
                    <img src="Dep.jpg" alt="Image 2" />
                    <div className={styles['text']}>
                        <h2>Title 2</h2>
                        <p>Description 2</p>
                        <a href="/link2" className={styles['learn-more-btn']}>
                            Learn More
                        </a>
                    </div>
                </div>
                
                <div className={styles['content-block']}>
                    <img src="image3.jpg" alt="Image 3" />
                    <div className={styles['text']}>
                        <h2>Title 3</h2>
                        <p>Description 3</p>
                        <a href="/link3" className={styles['learn-more-btn']}>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
*/
