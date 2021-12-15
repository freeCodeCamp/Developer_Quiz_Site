import QuizTemplate from './components/QuizTemplate';
import WelcomePage from './components/WelcomePage';
import fullQuiz from './data/full-quiz';
import { useState } from 'react';


const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const toggleHomePage = () => setIsHomePage(!isHomePage);

  return (
    <>
      {isHomePage ?
        <WelcomePage start={toggleHomePage} /> :
        <QuizTemplate quiz={fullQuiz} home={toggleHomePage} />
      }
    </>
  );
}

export default App;
