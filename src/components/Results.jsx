import React, { useContext, useEffect } from "react";
import ResultsContext from "../context/ResultsContext";

const Results = () => {
  const { history } = useContext(ResultsContext);

  useEffect(() => {
    if (history.length > 0) {
      // Puedes realizar cualquier acción adicional que necesites cuando history esté listo
    }
  }, [history]);

  if (history.length === 0) {
    return <div className="noresults">No hay respuestas aún</div>;
  }

  return (
    <div>
      <h2>Results</h2>
      <div className="resultsCards">
        {history.map((item, index) => (
          <div className="cards" key={index}>
            <div>
              <p>
                {item.userAnswer === "Correct"
                  ? "Correct answer!"
                  : "Wrong answer!"}
              </p>
            </div>
            <div>
              <p>{item.question}</p>
            </div>
            <div>
              <p>Correct Answer: {item.correctAnswer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
