import React, { useState } from "react";
import './PtsdQuiz.css';

const PtsdQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Have you experienced a traumatic event?",
      answers: ["Yes", "No", "I'm not sure", "Prefer not to say"],
    },
    {
      question: "Do you often have upsetting memories, thoughts, or dreams about the traumatic event?",
      answers: ["Yes", "No", "Sometimes", "Rarely"],
    },
    {
      question: "Do you avoid activities, places, or people that remind you of the traumatic event?",
      answers: ["Yes", "No", "Occasionally", "It depends"],
    },
    {
      question: "Do you feel easily startled or on edge?",
      answers: ["Yes", "No", "Sometimes", "Not really"],
    },
    {
      question: "Do you have difficulty sleeping or concentrating?",
      answers: ["Yes", "No", "Occasionally", "Rarely"],
    },
    {
      question: "Do you experience flashbacks of the traumatic event?",
      answers: ["Yes", "No", "Sometimes", "Not sure"],
    },
    {
      question: "Do you feel emotionally numb or detached from others?",
      answers: ["Yes", "No", "Sometimes", "Rarely"],
    },
    {
      question: "Do you have difficulty experiencing positive emotions?",
      answers: ["Yes", "No", "Occasionally", "Not really"],
    },
    {
      question: "Do you engage in reckless or self-destructive behavior?",
      answers: ["Yes", "No", "Sometimes", "Rarely"],
    },
    {
      question: "Do you feel irritable or have angry outbursts?",
      answers: ["Yes", "No", "Sometimes", "Rarely"],
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
      { min: 0, max: 10, result: "No or Minimal PTSD" },
      { min: 11, max: 20, result: "Mild PTSD" },
      { min: 21, max: 30, result: "Moderate PTSD" },
      { min: 31, max: 40, result: "Severe PTSD" },
    ];

    // Find the range that matches the score
    const result = ranges.find((range) => score >= range.min && score <= range.max);

    return result ? result.result : "Error: Result not found";
  };

  return (
    <div className="commonQuiz">
      <div className="container">
        <h2>PTSD TEST</h2>
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
            <PtsdResult score={score} />
            <button onClick={handleResetClick} className="button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PtsdQuiz;
