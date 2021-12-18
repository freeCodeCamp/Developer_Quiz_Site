import QuizTemplate from './components/QuizTemplate';
import WelcomePage from './components/WelcomePage';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quizzes" element={<QuizTemplate />} />
      </Routes>
    </>
  );
}

export default App;
