import WelcomePage from './components/WelcomePage';
import { useState } from 'react';
import SelectQuiz from './components/SelectQuiz';
import QuizBtn from "./components/QuizBtn";
import FCCLogo from './components/FCCLogo';

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const toggleHomePage = () => setIsHomePage(!isHomePage);

  return (
    <>

      {isHomePage ?
        <WelcomePage start={toggleHomePage} /> :
        <>

          <FCCLogo />
          <QuizBtn text="Return Home" handleClick={toggleHomePage} />

          <SelectQuiz />
        </>
      }
    </>
  );
}

export default App;
