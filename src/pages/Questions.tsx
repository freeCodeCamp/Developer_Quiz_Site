import { useNavigate } from "react-router-dom";
import QuizModal from "../components/QuizModal";
import React, { useEffect } from "react";

import { QuizProps } from "../types";
import Selectable from "../components/Selectable";

const Questions: React.FC<QuizProps> = QuizProps => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!QuizProps.choicesArr.length) {
      navigate("/quizzes");
    }
  }, [QuizProps.choicesArr]);
  return (
    <>
      <div className="quiz-text">
        <p>
          Question: {QuizProps.questionNumber}/{QuizProps.totalQuestions}
        </p>
        <p>Points: {QuizProps.points}</p>
      </div>
      <h1 className="quiz-heading">Question {QuizProps.questionNumber}</h1>
      <form className="select-quiz-styles">
        {QuizProps.chooseAnswer ? (
          <QuizModal {...QuizProps.modalProps} />
        ) : (
          <>
            <fieldset className="quiz-answers-div">
              <legend>
                <span className="sr-only">
                  Question {QuizProps.questionNumber}
                </span>
                {QuizProps.currQuestion.Question}
              </legend>
            </fieldset>

            <Selectable
              options={QuizProps.choicesArr[QuizProps.questionNumber - 1]}
              groupName="answers"
              onChange={(choice: string) => {
                QuizProps.selectOption(choice);
              }}
            />

            <div className="select-btn-div">
              <hr />
              <button
                className="select-btns submit-btn"
                style={{ opacity: QuizProps.selectedOption ? 1 : 0.5 }}
                onClick={() => QuizProps.checkAnswer()}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
};
export default Questions;
