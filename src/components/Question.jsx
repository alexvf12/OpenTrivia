import React, { useState } from 'react';

const Question = ({ category, type, difficulty, question, correctAnswer, incorrectAnswers, onAnswerClick }) => {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const answers = shuffleArray([correctAnswer, ...incorrectAnswers]);

  const sanitize = (text) =>
    text
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&deg;', 'º')
      .replaceAll('&shy;', '\u00AD');

  const handleAnswerClick = (answer) => {
    if (!answered) {
      setAnswered(true);
      const isCorrect = answer === correctAnswer;
      setIsCorrect(isCorrect);
      onAnswerClick(isCorrect); 
    }
  };

  return (
    <div>
      <div className='card'>
        <h2>{category}</h2>
        <p className='difficulty'>{difficulty}</p>
        <p className='question'>{sanitize(question)}</p>
        {answers.map((answer) => (
          <p
            key={answer}
            className={`answer ${answered && answer === correctAnswer ? 'correct' : ''} ${
              answered && answer !== correctAnswer ? 'incorrect' : ''
            }`}
            onClick={() => handleAnswerClick(answer)}
          >
            {sanitize(answer)}
          </p>
        ))}
        {answered && isCorrect && <div className="correctAnswer">¡Correct answer!</div>}
        {answered && !isCorrect && <div className="incorrectAnswer">Wrong answer!</div>}
      </div>
    </div>
  );
};

export default Question;
