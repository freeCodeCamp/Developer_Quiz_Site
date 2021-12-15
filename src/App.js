import htmlQuestions from './data/htmlQuestions.json';
import QuizTemplate from './components/QuizTemplate';
import WelcomePage from './components/WelcomePage';
import { useState } from 'react';

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const toggleHomePage = () => setIsHomePage(!isHomePage);

  return (
    <>
      {isHomePage ?
        <WelcomePage start={toggleHomePage} /> :
        <QuizTemplate home={toggleHomePage} data={htmlQuestions} />
      }
    </>
  );
}

export default App;
