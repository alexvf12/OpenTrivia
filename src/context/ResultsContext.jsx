import React, { createContext, useState } from "react";

const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const updateHistory = (data) => {
    setHistory((prevHistory) => [...prevHistory, data]);
  };


  return (
    <ResultsContext.Provider
      value={{
        history,
        updateHistory,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContext;