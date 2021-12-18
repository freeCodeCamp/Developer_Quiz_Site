import WelcomePage from './components/WelcomePage';
import { useState } from 'react';
import SelectQuiz from './components/SelectQuiz';

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const toggleHomePage = () => {
    setIsHomePage(!isHomePage);
  }

  return (
    <>
      {isHomePage ?
        <WelcomePage start={toggleHomePage} /> :
        <>
          <button className="btn btn-primary btn-xl rounded-pill mb-4" onClick={toggleHomePage}>Return Home</button>
          <SelectQuiz />
        </>

      }
    </>
  );
}

export default App;
