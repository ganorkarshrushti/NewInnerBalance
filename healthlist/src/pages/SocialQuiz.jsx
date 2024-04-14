import React, { useState } from "react";
import './SocialQuiz.css';
import SocialResult from "./SocialResult"; 

const SocialQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "How often do you feel nervous or anxious in social situations?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you avoid social situations due to fear or anxiety?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you worry about embarrassing yourself in front of others?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you fear being judged or criticized by others?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you feel self-conscious in social settings?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you experience physical symptoms like sweating or trembling in social situations?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
  ]);
  
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    const answerValue = clickedOption;
    setScore((prevScore) => prevScore + answerValue);
  };

  const handleOptionClick = (answerIndex) => {
    setClickedOption(answerIndex + 1);
    setTimeout(changeQuestion, 1000); // Automatically move to the next question after 1 second
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setClickedOption(0);
  };

  const getResult = () => {
    const ranges = [
      { min: 0, max: 10, result: "No or Minimal Anxiety" },
      { min: 11, max: 20, result: "Mild Anxiety" },
      { min: 21, max: 30, result: "Moderate Anxiety" },
      { min: 31, max: 40, result: "Severe Anxiety" },
    ];

    // Find the range that matches the score
    const result = ranges.find((range) => score >= range.min && score <= range.max);

    return result ? result.result : "Error: Result not found";
  };

  return (
    <div className="commonQuiz">
      <div className="container">
        <h2>SOCIAL TEST</h2>
        {!showResult ? (
          <div className="Quiz-question-option">
            <h3>{currentQuestion + 1}. {questions[currentQuestion].question}</h3>
            <p>
              {questions[currentQuestion].answers.map((answer, answerIndex) => (
                <button
                  className={`option-btn ${
                    clickedOption === answerIndex + 1 ? "checked" : null
                  }`}
                  key={answerIndex}
                  onClick={() => handleOptionClick(answerIndex)}
                >
                  {answer}
                </button>
              ))}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="result-heading">Result</h2>
            <h3 className="score">{getResult()}</h3>
            <AnxietyResult score={score} />
            <button onClick={handleResetClick} className="button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialQuiz;
