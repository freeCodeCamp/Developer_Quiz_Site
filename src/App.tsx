import WelcomePage from "./pages/WelcomePage";
import QuizTemplate from "./QuizTemplate";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/quizzes/*" element={<QuizTemplate />} />
    </Routes>
  );
};

export default App;
