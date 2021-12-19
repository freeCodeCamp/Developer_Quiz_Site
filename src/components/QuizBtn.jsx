const QuizBtn = ({ handleClick, text }) => {
  return (
    <button
      className="quiz-btn"
      onClick={handleClick}> {text}
    </button>
  )
}
export default QuizBtn;



