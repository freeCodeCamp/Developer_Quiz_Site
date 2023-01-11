import QuizModal from "./QuizModal";
import React, { MouseEventHandler } from "react";

interface QuizQuestion {
  message: string;
  points: number;
  chosenAnswer: string;
  displayExplanation: string;
  showReference: string;
  nextQuestion: MouseEventHandler;
  show: boolean;
}

interface QuizProps {
  currQuestion: { Question: string };
  questionNumber: number;
  totalQuestions: number;
  modalProps: QuizQuestion;
  chooseAnswer: boolean;
  points: number;
  choicesArr: string[][];
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Questions: React.FC<QuizProps> = QuizProps => {
  return (
    <>
      <h1 className="quiz-heading">Question {QuizProps.questionNumber}</h1>
      <br />
      <div className="quiz-text mt-4">
        <p>
          Question: {QuizProps.questionNumber}/{QuizProps.totalQuestions}
        </p>
        <p>Points: {QuizProps.points}</p>
      </div>

      <div className="quiz-div">
        {QuizProps.chooseAnswer ? (
          <QuizModal {...QuizProps.modalProps} />
        ) : (
            <fieldset className="w-50 quiz-answers-div">
              <legend>
                <span className='sr-only'>Question {QuizProps.questionNumber}</span>{' '}
                {QuizProps.currQuestion.Question}
              </legend>
            <ul>
              {QuizProps.choicesArr[QuizProps.questionNumber - 1].map(
                (btn: string | string[] | number, index: number) => (
                  <li key={index}>
                    <button
                      className="answers-btns"
                      value={btn}
                      onClick={e => QuizProps.checkAnswer(e)}
                      key={index}
                    >
                      {btn}
                    </button>
                  </li>
                )
              )}
            </ul>
          </fieldset>
        )}
      </div>
    </>
  );
};
export default Questions;
