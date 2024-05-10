import React, { useState } from "react";
import "./SocialQuiz.css";
import SocialResult from "./SocialResult"; // Import your result component here

const SocialQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "How often do you enjoy spending time with others?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you feel comfortable in social situations?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you initiate conversations with new people?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you feel anxious or nervous in social gatherings?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you actively listen to others when they speak?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you feel left out or isolated from social activities?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you express your emotions openly in social settings?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you engage in group activities or team sports?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you seek advice or support from friends or family?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often do you feel connected to your community or social groups?",
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
      { min: 0, max: 10, result: "Very Low Social Interaction" },
      { min: 11, max: 20, result: "Low Social Interaction" },
      { min: 21, max: 30, result: "Moderate Social Interaction" },
      { min: 31, max: 40, result: "High Social Interaction" },
    ];

    // Find the range that matches the score
    const result = ranges.find((range) => score >= range.min && score <= range.max);

    return result ? result.result : "Error: Result not found";
  };

  return (
    <div className="commonQuiz">
      <div className="container">
        <h2>SOCIAL INTERACTION TEST</h2>
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
            <SocialResult score={score} />
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
