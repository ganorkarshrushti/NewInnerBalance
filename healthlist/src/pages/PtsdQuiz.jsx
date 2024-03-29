import React, { useState } from "react";
import './PtsdQuiz.css';

const PTSDQuiz = () => {
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
  const [clickedOption, setClickedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    if (clickedOption === null) return; // Prevent changing question if option not selected
    updateScore();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    const answerValue = clickedOption === "Yes" ? 1 : 0;
    setScore((prevScore) => prevScore + answerValue);
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setClickedOption(null);
  };

  return (
    <div className="commonQuiz">
      <div className="container">
        <h2>PTSD TEST</h2>
        {!showResult ? (
          <div className="Quiz-question-option">
            <h3>{questions[currentQuestion].question}</h3>
            <div>
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  className={`option-btn ${
                    clickedOption === answer ? "checked" : null
                  }`}
                  onClick={() => setClickedOption(answer)}
                >
                  {answer}
                </button>
              ))}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
          </div>
        ) : (
          <div>
            <h2 className="result-heading">Result</h2>
            <h3 className="score">{score}</h3>
            <button onClick={handleResetClick} id="retake-button" className="button">
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PTSDQuiz;
