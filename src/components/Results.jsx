import { useState } from "react";
import SelectQuiz from "./SelectQuiz";

const Results = ({ points, totalPoints }) => {
  const [showResults, setShowResults] = useState(true);
  return (
    <>
      {showResults ?
        <div className="results-div" >
          <h1 className="results-heading">Results</h1>
          <h2>Total user points: {points} out of {totalPoints}</h2>
          <p className="results-text">Wanna learn how to code? Download the free <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/news/learn-to-code-rpg/">RPG game</a></p>
          <button
            onClick={() => setShowResults(!showResults)}
            className="results-btn"
          >Play again?
          </button>
        </div> :
        <SelectQuiz />
      }
    </>
  )
}
export default Results;