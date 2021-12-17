import { useState } from 'react';


const QuizTemplate = ({ home, quiz }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isResults, setIsResults] = useState(false);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [displayExplanation, setDisplayExplanation] = useState('');
  const [showReference, setShowReference] = useState('');
  const [chooseAnswer, setChooseAnswer] = useState(false);
  const choicesArr = [];
  let currQuestion = quiz[questionNumber - 1];
  const totalQuestions = quiz.length;
  const totalPoints = quiz.length;

  //fisher yates shuffle
  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {

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
  })


  const nextQuestion = () => {
    if (questionNumber === quiz.length) {
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
      setMessage(`Hmmm, not quite!`);
      setDisplayExplanation(currQuestion.Explanation)
      setShowReference(currQuestion.Link)
    } else {
      setPoints(curr => curr + 1)
      setMessage(`Awesome, that's correct!`)
      setDisplayExplanation(currQuestion.Explanation)
      setShowReference(currQuestion.Link)
    }
  }

  return (
    <>

      <button onClick={home}>Return Home</button>
      <a href='/' target="_blank">Play Learn to Code RPG game</a>
      {isResults ?
        <>
          <h2>Results</h2>
          <h3>{points}/{totalPoints}</h3>
          <p>I hope you had fun <i class="far fa-smile" /></p>
          <p>Wanna learn how to code? Download the free <a href="/">RPG game</a></p>
        </> :
        <>
          <h2>{currQuestion.Question}</h2>
          <h3>Question {questionNumber}/{totalQuestions}</h3>
          <h3>Points:{points}</h3>

          {chooseAnswer ?
            <div>
              <p>{message}</p>
              <p>{displayExplanation}</p>
              <a href={showReference} target="_blank" rel="noopener noreferrer">Learn more by reading this helpful article</a>
              <p>Wanna learn how to code? Play the <a target="_blank" href="/">Learn to Code RPG game</a></p>
              <button style={{ cursor: 'pointer', padding: '10px', borderRadius: '15px' }} onClick={nextQuestion}>Next</button>
            </div> :
            <div className='w-50' style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
              {choicesArr[questionNumber - 1].map((btn, index) => (
                <button value={btn} onClick={(e) => checkAnswer(e, "value")} style={{ cursor: 'pointer', padding: '10px', borderRadius: '15px', margin: '10px 0' }} key={index}>{btn}</button>
              ))}
            </div>
          }
        </>
      }
    </>
  )
}
export default QuizTemplate;









