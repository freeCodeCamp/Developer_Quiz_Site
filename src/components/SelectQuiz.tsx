const SelectQuiz = ({ startQuiz, selectQuizArr }) => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className='w-25 select-btn-div'>
        {selectQuizArr.map((choice, index) => (
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