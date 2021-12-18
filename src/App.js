import QuizTemplate from './components/QuizTemplate';
import WelcomePage from './components/WelcomePage';
import fullQuiz from './data/full-quiz';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/misc" element={<QuizTemplate quiz={fullQuiz} />} />
      </Routes>
    </>
  );
}

export default App;
