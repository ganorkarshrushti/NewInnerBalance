import React from 'react';
import { Link } from 'react-router-dom';
import quiz1Image from '../images/anxiety.jpg';
import quiz2Image from '../images/Dep.jpg';
import quiz3Image from '../images/Ocd.jpg';
import quiz4Image from '../images/adhd.jpg';
import quiz5Image from '../images/ptsd.jpg';
import quiz6Image from '../images/depression.jpg';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="container">
        <h1 >Take A Mental Health Test</h1>
        <center>
          <h3 >
            Please attempt all the questions honestly for accurate results
          </h3>
        </center>

        <div className="quiz-row">
          {/* First section of quizzes */}
          <div className="card">
            <div className="card-image">
              <img src={quiz1Image} alt="Quiz 1" />
            </div>
            <div className="card-content">
              <h2>Anxiety  Test</h2>
              <p>Our quiz can help you determine whether you have Anxiety.</p>
              <button><Link to="/AnxietyQuiz">Take Quiz</Link></button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={quiz2Image} alt="Quiz 2" />
            </div>
            <div className="card-content">
              <h2>Depression Test</h2>
              <p>
                 Our quiz can help you detect early signs of Depression
              </p>
              <button><Link to="/DepressionQuiz">Take Quiz</Link></button>
            </div>
          </div>
  
          <div className="card">
            <div className="card-image">
              <img src={quiz3Image} alt="Quiz 3" />
            </div>
            <div className="card-content">
              <h2>OCD Test</h2>
              <p>Our quiz can help you determine whether you have OCD</p>
              <button><Link to="/ocdquiz">Take Quiz</Link></button>
            </div>
          </div>
          </div>
          {/* Start of second section and end of first */}
          <div className="quiz-row">
          <div className="card">
            <div className="card-image">
              <img src={quiz4Image} alt="Quiz 4" />
            </div>
            <div className="card-content">
              <h2>ADHD Test</h2>
              <p>
                Our quiz can help you determine whether you
                have ADHD
              </p>
              <button><Link to="/AdhdQuiz">Take Quiz</Link></button>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={quiz5Image} alt="Quiz 5" />
            </div>
            <div className="card-content">
              <h2>PTSD Test</h2>
              <p>Our quiz can help you determine whether you have PTSD.</p>
              <button><Link to="/ptsdquiz">Take Quiz</Link></button>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={quiz6Image} alt="Quiz 6" />
            </div>
            <div className="card-content">
              <h2>Social Anxiety Test</h2>
              <p>Take this Quiz to know more.</p>
              <button><Link to="/SocialQuiz">Take Quiz</Link></button>
            </div>
          </div>
          {/* End of the second section */}
        </div>

        {/* Text note at the end */}
        <div className="end-note">
          <marquee>
          NOTE : Please remember that the results of these quizzes are not a substitute
          for professional medical advice. If you have concerns about your mental
          health, consult a healthcare professional.
          </marquee>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
