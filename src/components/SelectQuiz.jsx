import HomeBtn from "./HomeBtn";
import fullQuiz from '../data/full-quiz';
import { Link } from "react-router-dom";

const SelectQuiz = () => {
  const choicesArr = [25, 50, 100, 150, 200, 500];
  return (
    <>
      <HomeBtn />
      <h1>Choose the length for the Quiz</h1>
      <h3>HTML, CSS, JavaScript, Linux, Python, Git, SQL, IT and Computer Science concepts</h3>
      <div className="form-check">
        <label className="form-check-label" for="quizOptions">All {fullQuiz.length} Questions
          <input className="form-check-input" type="radio" name="quizOptions" id="all" value="all" checked />
        </label>
      </div>
      {choicesArr.map((choice, index) => (
        <div key={index} className="form-check">
          <label className="form-check-label" for="quizOptions">{choice} Questions
            <input className="form-check-input" type="radio" name="quizOptions" id={choice} value={choice} />
          </label>
        </div>
      ))}
      <Link to="/quizzes" className="btn btn-primary btn-xl rounded-pill mb-4">Start Quiz</Link>
    </>
  )
}
export default SelectQuiz;