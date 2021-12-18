import HomeBtn from "./HomeBtn";
import { Link } from "react-router-dom";

const SelectQuiz = () => {
  const choicesArr = [25, 50, 100, 150, 200, 500, "All"];
  return (
    <>
      <HomeBtn />
      <h1>Choose the length for the Quiz</h1>
      <h3>HTML, CSS, JavaScript, Linux, Python, Git, SQL, IT and Computer Science concepts</h3>
      {choicesArr.map((choice, index) => (
        <Link key={index} to={`/quiz${choice}`} className="btn btn-primary btn-xl rounded-pill mb-4">{choice}</Link>
      ))}
    </>
  )
}
export default SelectQuiz;