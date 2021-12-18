import { useState } from "react";
import QuizTemplate from './QuizTemplate';
import shuffle from "../shuffle-arr";
import fullQuiz from "../data/full-quiz";

const SelectQuiz = () => {
  const [showOptions, setShowOptions] = useState(true);
  const [quiz, setQuiz] = useState(fullQuiz);
  const choicesArr = [10, 25, 50, 100, quiz.length];

  const startQuiz = (e) => {
    setShowOptions(false);
    let userAnswer = e.target.value;
    setQuiz(shuffle(fullQuiz).slice(0, userAnswer));
  }

  return (
    <>
      {showOptions ?
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Choose a length for the Quiz</h1>
          <div className='w-25' style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
            {choicesArr.map((choice, index) => (
              <button onClick={(e) => startQuiz(e, "value")} value={choice} key={index} style={{ cursor: 'pointer', padding: '10px', borderRadius: '15px', margin: '10px 0' }} >{choice > 600 ? `All ${choice} questions` : `${choice} questions`}</button>
            ))}
          </div>
        </div> :
        <QuizTemplate quiz={quiz} />
      }
    </>
  )
}
export default SelectQuiz;