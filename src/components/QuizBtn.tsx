import { MouseEventHandler } from "react";

const QuizBtn  : React.FC<{handleClick: MouseEventHandler , text : string}> = ({ handleClick, text }) => {
  return (
    <button
      className="quiz-btn"
      onClick={handleClick}> {text}
    </button>
  )
}
export default QuizBtn;



