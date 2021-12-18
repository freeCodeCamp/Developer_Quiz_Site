import QuizTemplate from './components/QuizTemplate';
import WelcomePage from './components/WelcomePage';
import fullQuiz from './data/full-quiz';
import { useState } from 'react';
import shuffle from './shuffle-arr';

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const toggleHomePage = () => {
    shuffle(fullQuiz);
    setIsHomePage(!isHomePage);
  }

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
