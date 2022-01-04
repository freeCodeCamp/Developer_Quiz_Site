import { useState, useEffect } from 'react';
import SelectQuiz from './SelectQuiz';
import fullQuiz from '../data/full-quiz';
import Results from './Results';
import shuffle from '../shuffle-arr';
import Button from './Button';
import FCCLogo from './FCCLogo';
import Questions from './Questions';
import '../stylesheets/App.css';
import { correctModalResponses, incorrectModalResponses } from '../data/modal-responses';

const QuizTemplate = ({ home }) => {
  const [quiz, setQuiz] = useState(fullQuiz);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isResults, setIsResults] = useState(false);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [displayExplanation, setDisplayExplanation] = useState('');
  const [showReference, setShowReference] = useState('');
  const [chooseAnswer, setChooseAnswer] = useState(false);
  const [show, setShow] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const selectQuizArr = [10, 25, 50, 100, quiz.length];
  const choicesArr = [];
  let currQuestion = quiz[questionNumber - 1];
  const totalQuestions = quiz.length;
  const totalPoints = quiz.length;

  //detects if the user tries the refresh the page in the middle of the quiz
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const startQuiz = (e) => {
    setShowOptions(false);
    let userAnswer = e.target.value;
    setQuiz(shuffle(quiz).slice(0, userAnswer));
  };


  //function for toggling the react-bootstrap modal
  const handleShow = () => setShow(true);


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
  };

  const resetQuiz = () => {
    setQuiz(fullQuiz)
    setIsResults(false)
    setShow(false)
    setShowOptions(true)
    setChooseAnswer(false)
    setPoints(0)
    setQuestionNumber(1)
  };

  const shuffleModalResponses = (responses) => {
    let shuffleModalArr = shuffle(responses);
    return shuffleModalArr[0];
  };

  const checkAnswer = (e) => {
    setChooseAnswer(true)
    let userAnswer = e.target.value;
    if (userAnswer !== currQuestion.Answer) {
      setMessage(shuffleModalResponses(incorrectModalResponses));
      setDisplayExplanation(currQuestion.Explanation)
      setShowReference(currQuestion.Link)
      handleShow()
    } else {
      setPoints(curr => curr + 1)
      setMessage(shuffleModalResponses(correctModalResponses))
      setDisplayExplanation(currQuestion.Explanation)
      setShowReference(currQuestion.Link)
      handleShow()
    }
  };

  const selectQuizProps = {
    startQuiz,
    selectQuizArr
  };

  const modalProps = {
    message,
    points,
    displayExplanation,
    showReference,
    show,
    nextQuestion
  };

  const resultsProps = {
    points,
    totalPoints,
    resetQuiz
  };

  const questionProps = {
    currQuestion,
    questionNumber,
    totalQuestions,
    modalProps,
    chooseAnswer,
    points,
    choicesArr,
    checkAnswer
  };

  return (
    <>
      <Button handleClick={home} text="Home" isTransparent={false} />
      <FCCLogo />
      {showOptions ?
        <SelectQuiz {...selectQuizProps} /> :
        isResults ?
          <Results  {...resultsProps} /> : <Questions {...questionProps} {...modalProps} />
      }
    </>
  )
}
export default QuizTemplate;











