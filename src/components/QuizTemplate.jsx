import { useState } from 'react';
import QuizModal from './QuizModal';
import { Link } from "react-router-dom";


const QuizTemplate = ({ home, quiz }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isResults, setIsResults] = useState(false);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [displayExplanation, setDisplayExplanation] = useState('');
  const [showReference, setShowReference] = useState('');
  const [chooseAnswer, setChooseAnswer] = useState(false);
  const [show, setShow] = useState(false);
  const choicesArr = [];
  let currQuestion = quiz[questionNumber - 1];
  const totalQuestions = quiz.length;
  const totalPoints = quiz.length;


  //function for toggling the react-bootstrap modal
  const handleShow = () => setShow(true);

  //fisher yates shuffle
  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  //shuffle the right and wrong answers
  quiz.forEach(obj => {
    let arr = [obj.Answer, obj.Distractor1, obj.Distractor2, obj.Distractor3];
    choicesArr.push(shuffle(arr))
  });


  const nextQuestion = () => {
    if (questionNumber >= quiz.length) {
      setIsResults(true)
      return
    }
    setQuestionNumber(curr => curr + 1)
    setChooseAnswer(false)
  }


  const checkAnswer = (e) => {
    setChooseAnswer(true)
    let userAnswer = e.target.value;
    if (userAnswer !== currQuestion.Answer) {
      setMessage(`Hmmm, not quite`);
      setDisplayExplanation(currQuestion.Explanation)
      setShowReference(currQuestion.Link)
      handleShow()
    } else {
      setPoints(curr => curr + 1)
      setMessage(`Awesome, that's correct!`)
      setDisplayExplanation(currQuestion.Explanation)
      setShowReference(currQuestion.Link)
      handleShow()
    }
  }

  const modalProps = {
    message,
    points,
    displayExplanation,
    showReference,
    show,
    nextQuestion
  }

  return (
    <>

      <Link className="btn btn-primary btn-xl rounded-pill mb-4" to="/">Return Home</Link>
      {isResults ?
        <>
          <h2>Results</h2>
          <h3>{points}/{totalPoints}</h3>
          <p>I hope you had fun <i class="far fa-smile" /></p>
          <p>Wanna learn how to code? Download the free <a href="/">RPG game</a></p>
        </> :
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2>{currQuestion.Question}</h2>
          <h3>Question {questionNumber}/{totalQuestions}</h3>
          <h3>Points:{points}</h3>

          {chooseAnswer ?
            <QuizModal {...modalProps} />
            :
            <div className='w-50' style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
              {choicesArr[questionNumber - 1].map((btn, index) => (
                <button value={btn} onClick={(e) => checkAnswer(e, "value")} style={{ cursor: 'pointer', padding: '10px', borderRadius: '15px', margin: '10px 0' }} key={index}>{btn}</button>
              ))}
            </div>
          }
        </div>
      }
    </>
  )
}
export default QuizTemplate;











