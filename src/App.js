import WelcomePage from './components/WelcomePage';
import QuizTemplate from './components/QuizTemplate';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quiz" element={<QuizTemplate />} />
      </Routes>
    </>
  );
}

export default App;
