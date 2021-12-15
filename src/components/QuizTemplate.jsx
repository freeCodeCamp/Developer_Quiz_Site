import { useState } from 'react';
import htmlQuestions from '../data/htmlQuestions';


const QuizTemplate = ({ home }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isResults, setIsResults] = useState(false);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [displayExplanation, setDisplayExplanation] = useState('');
  const [showReference, setShowReference] = useState('');
  const [chooseAnswer, setChooseAnswer] = useState(false);
  const choicesArr = [];
  let currQuestion = htmlQuestions[questionNumber - 1];
  const totalQuestions = htmlQuestions.length;
  const totalPoints = 5 * htmlQuestions.length;

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  htmlQuestions.forEach(obj => {
    let arr = [obj.Answer, obj.Distractor1, obj.Distractor2, obj.Distractor3];
    choicesArr.push(shuffle(arr))
  })


  const nextQuestion = () => {
    if (questionNumber === htmlQuestions.length) {
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
      setMessage(`Sorry, that is incorrect`);
      setDisplayExplanation(currQuestion.Explanation)
      setShowReference(currQuestion.Link)
    } else {
      setPoints(curr => curr + 5)
      setMessage(`Correct!`)
      setDisplayExplanation(currQuestion.Explanation)
      setShowReference(currQuestion.Link)
    }
  }

  return (
    <>

      <button onClick={home}>Return Home</button>
      <a href='/' target="_blank">Play RPG game</a>
      {isResults ?
        <>
          <h2>Results</h2>
          <h3>{points}/{totalPoints}</h3>
          <p>I hope you had fun <i class="far fa-smile" /></p>
          <p>Wanna learn how to code? Play the <a href="/">RPG game</a></p>
        </> :
        <>
          <h2>{currQuestion.Question}</h2>
          <h3>Question {questionNumber}/{totalQuestions}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: '20px' }}>
            {choicesArr[questionNumber - 1].map((btn, index) => (
              <button value={btn} onClick={(e) => checkAnswer(e, "value")} style={{ cursor: 'pointer', padding: '10px', borderRadius: '15px', margin: '10px 0' }} key={index}>{btn}</button>
            ))}
          </div>
          {chooseAnswer ?
            <div>
              <p>{message}</p>
              <p>{displayExplanation}</p>
              <a href={showReference} target="_blank" rel="noopener noreferrer">Helpful freeCodeCamp reference</a>
              <p>Wanna learn how to code? Play the <a target="_blank" href="/">RPG game</a></p>
              <button style={{ cursor: 'pointer', padding: '10px', borderRadius: '15px' }} onClick={nextQuestion}>Next</button>
            </div> : null
          }
        </>
      }
    </>
  )
}
export default QuizTemplate;









