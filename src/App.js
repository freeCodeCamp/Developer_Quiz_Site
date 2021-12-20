import WelcomePage from './components/WelcomePage';
import QuizTemplate from './components/QuizTemplate';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quizPage" element={<QuizTemplate />} />
      </Routes>
    </>
  );
}

export default App;
