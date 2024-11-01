import React, { MouseEventHandler } from "react";
import Modal from "./Modal";
import "../stylesheets/QuizModal.css";

interface QuizQuestion {
  chosenAnswer: string;
  message: string;
  points: number;
  correct: boolean;
  displayExplanation: string;
  showReference: string;
  nextQuestion: MouseEventHandler;
  show: boolean;
}

const QuizModal: React.FC<QuizQuestion> = (QuizQuestion) => {
  const lightBulbUnicode = "\uD83D\uDCA1";
  const sadFaceUnicode = "\uD83D\uDE14";
  const answerIcon = QuizQuestion.correct ? lightBulbUnicode : sadFaceUnicode;

  return (
    <Modal show={QuizQuestion.show} onClose={QuizQuestion.nextQuestion}>
      <div className="modal-header">
        <h2 className="modal-title">
          {answerIcon} {QuizQuestion.message}
        </h2>
        <h3 className="modal-points" data-testid="modal-points">
          Points: {QuizQuestion.points}
        </h3>
      </div>
      <div className="modal-body">
        <p>
          <b>Your Answer:</b>
        </p>
        <p>{QuizQuestion.chosenAnswer}</p>
        <p>
          <b>Answer:</b>
        </p>
        <p>{QuizQuestion.displayExplanation}</p>
        <a
          className="modal-link"
          href={QuizQuestion.showReference}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more with this helpful resource
        </a>
        <br />
        <br />
        <p>
          Wanna learn how to code? <br /> Download the free{" "}
          <a
            className="modal-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.freecodecamp.org/news/learn-to-code-rpg/"
          >
            Learn to Code RPG game
          </a>
        </p>
      </div>
      <div className="modal-footer">
        <button className="modal-btn" onClick={QuizQuestion.nextQuestion}>
          Next Question
        </button>
      </div>
    </Modal>
  );
};

export default QuizModal;
