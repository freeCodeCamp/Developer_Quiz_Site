import React, { useState, useEffect } from "react";
import SelectQuiz from "./SelectQuiz";

import { ALL_CATEGORIES, CATEGORY_NAMES } from "../constants";
import Results from "./Results";
import shuffle from "../shuffle-arr";
import Button from "./Button";
import FCCLogo from "./FCCLogo";
import Questions from "./Questions";
import "../stylesheets/App.css";
import {
  correctModalResponses,
  incorrectModalResponses
} from "../data/modal-responses";

interface QuizProps {
  home: React.MouseEventHandler;
}

const QuizTemplate: React.FC<QuizProps> = QuizProps => {
  const [quiz, setQuiz] = useState(ALL_CATEGORIES);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isResults, setIsResults] = useState(false);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("");
  const [displayExplanation, setDisplayExplanation] = useState("");
  const [showReference, setShowReference] = useState("");
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [chooseAnswer, setChooseAnswer] = useState(false);
  const [show, setShow] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  // Category Questions
  const [questionCategories, setQuestionCategories] = useState({
    accessibilityQuestionsCorrect: 0,
    agileQuestionsCorrect: 0,
    cloudComputingQuestionsCorrect: 0,
    cssQuestionsCorrect: 0,
    freeCodeCampQuestionsCorrect: 0,
    generalCSQuestionsCorrect: 0,
    gitQuestionsCorrect: 0,
    htmlQuestionsCorrect: 0,
    infoTechQuestionsCorrect: 0,
    javascriptQuestionsCorrect: 0,
    linuxQuestionsCorrect: 0,
    pythonQuestionsCorrect: 0,
    securityQuestionsCorrect: 0,
    sqlQuestionsCorrect: 0,
    qualityAssuranceQuestionsCorrect: 0,
    regexQuestionsCorrect: 0
  });

  const selectQuizArr = [10, 25, 50, 100, quiz.length];
  const choicesArr: string[][] = [];
  const currQuestion = quiz[questionNumber - 1];
  const totalQuestions = quiz.length;
  const totalPoints = quiz.length;

  //detects if the user tries the refresh the page in the middle of the quiz
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const startQuiz = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShowOptions(false);
    const userAnswer = parseInt(e.currentTarget.value);
    setQuiz(shuffle(quiz).slice(0, userAnswer));
  };

  //function for toggling the react-bootstrap modal
  const handleShow = () => setShow(true);

  //shuffle the right and wrong answers
  quiz.forEach(obj => {
    const arr = [obj.Answer, obj.Distractor1, obj.Distractor2, obj.Distractor3];
    choicesArr.push(shuffle<string>(arr));
  });

  const nextQuestion = () => {
    if (questionNumber >= quiz.length) {
      setIsResults(true);
      return;
    }
    setQuestionNumber(curr => curr + 1);
    setChooseAnswer(false);
  };

  const resetQuiz = () => {
    setQuiz(ALL_CATEGORIES);
    setIsResults(false);
    setShow(false);
    setShowOptions(true);
    setChooseAnswer(false);
    setPoints(0);
    setQuestionNumber(1);
    resetCategoryPoints();
  };

  const hideResultsBreakdown = () => {
    setShow(false);
  };

  const resetCategoryPoints = () => {
    setQuestionCategories({
      accessibilityQuestionsCorrect: 0,
      agileQuestionsCorrect: 0,
      cloudComputingQuestionsCorrect: 0,
      cssQuestionsCorrect: 0,
      freeCodeCampQuestionsCorrect: 0,
      generalCSQuestionsCorrect: 0,
      gitQuestionsCorrect: 0,
      htmlQuestionsCorrect: 0,
      infoTechQuestionsCorrect: 0,
      javascriptQuestionsCorrect: 0,
      linuxQuestionsCorrect: 0,
      pythonQuestionsCorrect: 0,
      securityQuestionsCorrect: 0,
      sqlQuestionsCorrect: 0,
      qualityAssuranceQuestionsCorrect: 0,
      regexQuestionsCorrect: 0
    });
  };

  const shuffleModalResponses = (responses: string[]) => {
    const shuffleModalArr = shuffle<string>(responses);
    return shuffleModalArr[0];
  };

  const incrementCategoryQuestionScore = (categoryName: string) => {
    const copy = Object.assign({}, questionCategories);
    if (categoryName == CATEGORY_NAMES.AGILE) {
      const agileScore = questionCategories.agileQuestionsCorrect + 1;
      copy.agileQuestionsCorrect = agileScore;
    } else if (categoryName == CATEGORY_NAMES.ACCESSIBILITY) {
      const accessibilityScore =
        questionCategories.accessibilityQuestionsCorrect + 1;
      copy.accessibilityQuestionsCorrect = accessibilityScore;
    } else if (categoryName == CATEGORY_NAMES.CLOUDCOMPUTING) {
      const cloudComputingScore =
        questionCategories.cloudComputingQuestionsCorrect + 1;
      copy.cloudComputingQuestionsCorrect = cloudComputingScore;
    } else if (categoryName == CATEGORY_NAMES.CSS) {
      const cssScore = questionCategories.cssQuestionsCorrect + 1;
      copy.cssQuestionsCorrect = cssScore;
    } else if (categoryName == CATEGORY_NAMES.FREECODECAMP) {
      const freeCodeCampScore =
        questionCategories.freeCodeCampQuestionsCorrect + 1;
      copy.freeCodeCampQuestionsCorrect = freeCodeCampScore;
    } else if (categoryName == CATEGORY_NAMES.GENERAL) {
      const generalScore = questionCategories.generalCSQuestionsCorrect + 1;
      copy.generalCSQuestionsCorrect = generalScore;
    } else if (categoryName == CATEGORY_NAMES.GIT) {
      const gitScore = questionCategories.gitQuestionsCorrect + 1;
      copy.gitQuestionsCorrect = gitScore;
    } else if (categoryName == CATEGORY_NAMES.HTML) {
      const htmlScore = questionCategories.htmlQuestionsCorrect + 1;
      copy.htmlQuestionsCorrect = htmlScore;
    } else if (categoryName == CATEGORY_NAMES.INFOTECH) {
      const infoTechScore = questionCategories.infoTechQuestionsCorrect + 1;
      copy.infoTechQuestionsCorrect = infoTechScore;
    } else if (categoryName == CATEGORY_NAMES.JAVASCRIPT) {
      const javaScriptScore = questionCategories.javascriptQuestionsCorrect + 1;
      copy.javascriptQuestionsCorrect = javaScriptScore;
    } else if (categoryName == CATEGORY_NAMES.LINUX) {
      const linuxScore = questionCategories.linuxQuestionsCorrect + 1;
      copy.linuxQuestionsCorrect = linuxScore;
    } else if (categoryName == CATEGORY_NAMES.PYTHON) {
      const pythonScore = questionCategories.pythonQuestionsCorrect + 1;
      copy.pythonQuestionsCorrect = pythonScore;
    } else if (categoryName == CATEGORY_NAMES.QUALITYASSURANCE) {
      const qualityAssuranceScore =
        questionCategories.qualityAssuranceQuestionsCorrect + 1;
      copy.qualityAssuranceQuestionsCorrect = qualityAssuranceScore;
    } else if (categoryName == CATEGORY_NAMES.REGEX) {
      const regexScore = questionCategories.regexQuestionsCorrect + 1;
      copy.regexQuestionsCorrect = regexScore;
    } else if (categoryName == CATEGORY_NAMES.SECURITY) {
      const securityScore = questionCategories.securityQuestionsCorrect + 1;
      copy.securityQuestionsCorrect = securityScore;
    } else if (categoryName == CATEGORY_NAMES.SQL) {
      const sqlScore = questionCategories.sqlQuestionsCorrect + 1;
      copy.sqlQuestionsCorrect = sqlScore;
    }
    setQuestionCategories(copy);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setChooseAnswer(true);
    const userAnswer = e.currentTarget.value;
    setChosenAnswer(userAnswer);
    if (userAnswer !== currQuestion.Answer) {
      setMessage(shuffleModalResponses(incorrectModalResponses));
      setDisplayExplanation(currQuestion.Explanation);
      setShowReference(currQuestion.Link);
      handleShow();
    } else {
      incrementCategoryQuestionScore(currQuestion.Category);
      setPoints(curr => curr + 1);
      setMessage(shuffleModalResponses(correctModalResponses));
      setDisplayExplanation(currQuestion.Explanation);
      setShowReference(currQuestion.Link);
      handleShow();
    }
  };

  const selectQuizProps = {
    startQuiz,
    selectQuizArr
  };

  const modalProps = {
    chosenAnswer,
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
    resetQuiz,
    hideResultsBreakdown,
    questionCategories,
    show
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
      <Button
        handleClick={QuizProps.home}
        text="Home"
        isTransparent={false}
        size={""}
      />
      <FCCLogo />
      {showOptions ? (
        <SelectQuiz {...selectQuizProps} />
      ) : isResults ? (
        <Results {...resultsProps} />
      ) : (
        <Questions {...questionProps} {...modalProps} />
      )}
    </>
  );
};
export default QuizTemplate;
