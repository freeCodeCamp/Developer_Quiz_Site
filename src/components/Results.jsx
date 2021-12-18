import { useState } from "react";
import SelectQuiz from "./SelectQuiz";

const Results = ({ points, totalPoints }) => {
  const [showResults, setShowResults] = useState(true);
  return (
    <>
      {showResults ?

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <h2>Results</h2>
          <h3>Total user points: {points} out of {totalPoints}</h3>
          <p>I hope you had fun <i class="far fa-smile" /></p>
          <p>Wanna learn how to code? Download the free <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/news/learn-to-code-rpg/">RPG game</a></p>
          <button onClick={() => setShowResults(!showResults)}>Play again?</button>
        </div >
        :
        <SelectQuiz />
      }
    </>

  )
}
export default Results;