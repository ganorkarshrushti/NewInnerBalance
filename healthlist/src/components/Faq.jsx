import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions:</h2>

      <div className="faq-item">
        <div className="faq-box">
          <h3>What is mental health?</h3>
          <p>Mental health refers to a person's emotional, psychological, and social well-being. It encompasses how individuals think, feel, and behave in various situations, and it influences how they handle stress, relate to others, and make choices in life.</p>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-box">
          <h3>Why is mental health important?</h3>
          <p>Mental health is crucial for overall well-being and quality of life. It affects every aspect of a person's life, including their relationships, work or school performance, physical health, and ability to cope with challenges. Taking care of mental health is essential for achieving balance, resilience, and fulfillment in life.</p>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-box">
          <h3>What are common mental health disorders?</h3>
          <p>Common mental health disorders include depression, anxiety disorders (such as generalized anxiety disorder, social anxiety disorder, and panic disorder), bipolar disorder, schizophrenia, post-traumatic stress disorder (PTSD), obsessive-compulsive disorder (OCD), and eating disorders.</p>
        </div>
      </div>

      {/* Add more FAQs here */}
    </div>
  );
};

export default Faq;
