
import React, { useState } from "react";
import './DepressionQuiz.css';
import DepressionResult from "./DepressionResult";

const DepressionQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "I have lost interest in activities I used to enjoy.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have difficulty concentrating or making decisions.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have feelings of worthlessness or guilt.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have thoughts of death or suicide.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have changes in my appetite.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have changes in my sleep patterns.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have decreased energy levels.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have difficulty controlling my emotions.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have physical aches and pains.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have withdrawn from social activities.",
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
      { min: 0, max: 10, result: "No or Minimal Depression" },
      { min: 11, max: 20, result: "Mild Depression" },
      { min: 21, max: 30, result: "Moderate Depression" },
      { min: 31, max: 40, result: "Severe Depression" },
    ];

    // Find the range that matches the score
    const result = ranges.find((range) => score >= range.min && score <= range.max);

    return result ? result.result : "Error: Result not found";
  };

  return (
    <div className="commonQuiz">
      <div className="container">
        <h2>DEPRESSION TEST</h2>
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
            <DepressionResult score={score} />
            <button onClick={handleResetClick} className="button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );

};

export default DepressionQuiz;
