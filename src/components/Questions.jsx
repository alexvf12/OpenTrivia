import React, { useContext, useEffect, useState } from "react";
import SettingsContext from "../context/SettingsContext";
import Question from "./Question";
import ResultsContext from "../context/ResultsContext";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const { settings } = useContext(SettingsContext);
  const { updateHistory } = useContext(ResultsContext);

  const apiUrl = "https://opentdb.com/api.php?type=multiple";

  const [correctCount, setCorrectCount] = useState(
    localStorage.getItem("correctCount")
      ? parseInt(localStorage.getItem("correctCount"))
      : 0
  );
  const [incorrectCount, setIncorrectCount] = useState(
    localStorage.getItem("incorrectCount")
      ? parseInt(localStorage.getItem("incorrectCount"))
      : 0
  );

  const [currentStreak, setCurrentStreak] = useState(
    localStorage.getItem("currentStreak")
      ? parseInt(localStorage.getItem("currentStreak"))
      : 0
  );
  const [recordStreak, setRecordStreak] = useState(
    localStorage.getItem("recordStreak")
      ? parseInt(localStorage.getItem("recordStreak"))
      : 0
  );

  useEffect(() => {
    const fetchData = async () => {
      const filterNumber = "&amount=" + settings.number;
      let filterCategory;
      if (settings.category === "Sports") {
        filterCategory = "&category=21";
      } else if (settings.category === "Geography") {
        filterCategory = "&category=22";
      } else if (settings.category === "General Knowledge") {
        filterCategory = "&category=9";
      }
      const filterDifficulty =
        "&difficulty=" + settings.difficulty.toLowerCase();
      const response = await fetch(
        `${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`
      );
      const data = await response.json();
      console.log(data.results);
      setQuestions(data.results);
    };
    fetchData();
  }, [settings]);

  const handleAnswerClick = (isCorrect, question) => {
    if (isCorrect) {
      const updatedCorrectCount = correctCount + 1;
      setCorrectCount(updatedCorrectCount);
      localStorage.setItem("correctCount", updatedCorrectCount.toString());

      setCurrentStreak((prevStreak) => prevStreak + 1);

      if (currentStreak + 1 > recordStreak) {
        setRecordStreak((prevRecord) => prevRecord + 1);
        localStorage.setItem("recordStreak", (currentStreak + 1).toString());
      }

      localStorage.setItem("currentStreak", (currentStreak + 1).toString());
    } else {
      const updatedIncorrectCount = incorrectCount + 1;
      setIncorrectCount(updatedIncorrectCount);
      localStorage.setItem("incorrectCount", updatedIncorrectCount.toString());

      setCurrentStreak(0);
      localStorage.setItem("currentStreak", "0");
    }
    updateHistory({
      question: question.question,
      correctAnswer: question.correct_answer,
      userAnswer: isCorrect ? "Correct" : "Incorrect", // Opción del usuario
      isCorrect,  });
  };

  return (
    <div className="bg-quiz">
      <div className="result">
        <p>Correct answers history: {correctCount}</p>
        <p>Incorrect answers history: {incorrectCount}</p>
        <p>Correct answers in a row: {currentStreak}</p>
        <p>Record correct answers in a row: {recordStreak}</p>
      </div>
      <div className="container questions">
        {questions.map((question, index) => (
          <Question
            key={index}
            category={question.category}
            type={question.type}
            difficulty={question.difficulty}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            onAnswerClick={(isCorrect) => handleAnswerClick(isCorrect, question, question.correct_answer)}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;