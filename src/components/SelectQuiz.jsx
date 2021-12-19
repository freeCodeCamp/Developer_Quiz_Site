import { useState } from "react";
import QuizTemplate from './QuizTemplate';
import shuffle from "../shuffle-arr";
import fullQuiz from "../data/full-quiz";
import '../App.css';

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
        <div className="select-quiz-styles">
          <h2 className="select-quiz-heading">Choose a length for the Quiz</h2>
          <div className='w-25 select-btn-div'>
            {choicesArr.map((choice, index) => (
              <button
                className="select-btns"
                onClick={(e) => startQuiz(e, "value")}
                value={choice} key={index} >{choice > 600 ? `All ${choice} questions` : `${choice} questions`}
              </button>
            ))}
          </div>
        </div> :
        <QuizTemplate quiz={quiz} />
      }
    </>
  )
}
export default SelectQuiz;