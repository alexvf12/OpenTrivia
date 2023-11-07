import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Settings from "./components/Settings";
import Questions from "./components/Questions";
import Results from "./components/Results"; // Importamos la nueva página
import NotFound from "./components/NotFound";
import { SettingsProvider } from "./context/SettingsContext";
import { ResultsProvider } from "./context/ResultsContext"; // Agregamos el ResultsProvider

function App() {
  return (
    <SettingsProvider>
      <ResultsProvider>
        {" "}
        {/* Agregamos el ResultsProvider aquí */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Questions />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/results" element={<Results />} />{" "}
            {/* Nueva ruta para la página Results */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ResultsProvider>{" "}
      {/* Cerramos el ResultsProvider */}
    </SettingsProvider>
  );
}

export default App;
