// components/Question.js
import React, { useState, useEffect } from 'react';

const Question = ({ question, onNextQuestion }) => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      onNextQuestion(null); // Time's up, move to next question
    }
  }, [timer, onNextQuestion]);

  const handleAnswer = (selectedAnswer) => {
    onNextQuestion(selectedAnswer);
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <div>
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <p>Time left: {timer} seconds</p>
    </div>
  );
};

export default Question;
