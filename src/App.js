import QuizTemplate from './components/QuizTemplate';
import WelcomePage from './components/WelcomePage';
import { useState } from 'react';

//get confirmation about multiple quizzes or just one giant one
// if multiple quizzes then use react router

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const toggleHomePage = () => setIsHomePage(!isHomePage);

  return (
    <>
      {isHomePage ?
        <WelcomePage start={toggleHomePage} /> :
        <QuizTemplate home={toggleHomePage} />

      }
    </>
  );
}

export default App;
