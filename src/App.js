import QuizTemplate from './components/QuizTemplate';
import WelcomePage from './components/WelcomePage';
import SelectQuiz from './components/SelectQuiz';
import { Routes, Route } from "react-router-dom";
import shuffle from './shuffle-arr';
import fullQuiz from './data/full-quiz';

const App = () => {
  const choicesArr = [25, 50, 100, 150, 200, 500];


  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="quizzes" element={<SelectQuiz />} />
        <Route path="/quizAll" element={<QuizTemplate quiz={shuffle(fullQuiz)} />} />
        {choicesArr.map((type, index) => (
          <Route key={index} path={`/quiz${type}`} element={<QuizTemplate quiz={shuffle(fullQuiz.slice(0, type))} />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
