import { MouseEventHandler } from "react";
import {  Key} from "react";

const SelectQuiz: React.FC<{ startQuiz: any,selectQuizArr: any[]}> = ({ startQuiz, selectQuizArr }) => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className='w-25 select-btn-div'>
        {selectQuizArr.map((choice: string | number | readonly string[], index: Key) => (
          <button
            className="select-btns"
            onClick={(e) => startQuiz(e, "value")}
            value={choice} key={index} >{choice > 600 ? `All (${choice})` : `${choice}`}
          </button>
        ))}
      </div>
    </div>
  )
}
export default SelectQuiz;