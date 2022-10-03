import WelcomePage from "./components/WelcomePage";
import QuizTemplate from "./components/QuizTemplate";
import React, { useState } from "react";

const App: React.FC = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const toggleHomePage = () => setIsHomePage(!isHomePage);
  return (
    <>
      {isHomePage ? (
        <WelcomePage start={toggleHomePage} />
      ) : (
        <QuizTemplate home={toggleHomePage} />
      )}
    </>
  );
};
export default App;
