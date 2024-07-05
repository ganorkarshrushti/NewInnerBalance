import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions:</h2>
      <div className="faq-item">
        <div className="faq-box">
          <h3>How can I improve my mood when feeling down</h3>
          <p>Focus on self-care activities like getting enough sleep, eating nutritious foods, and spending time with supportive friends or family members.</p>
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
          <h3>How can I manage stress effectively</h3>
          <p>Try relaxation techniques like deep breathing or meditation. Also, consider setting boundaries and prioritizing tasks to reduce overwhelming feeling.</p>
        </div>
      </div>
    </div>
  );
};
export default Faq;
