import React, { MouseEventHandler, useRef } from "react";
import "../stylesheets/Modal.css";
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

const QuizModal: React.FC<QuizQuestion> = QuizQuestion => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lightBulbUnicode = "\uD83D\uDCA1";
  const sadFaceUnicode = "\uD83D\uDE14";
  const answerIcon = QuizQuestion.correct ? lightBulbUnicode : sadFaceUnicode;

  // Open/close the dialog using the dialog element's built-in methods
  React.useEffect(() => {
    if (QuizQuestion.show) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [QuizQuestion.show]);

  return (
    <dialog ref={dialogRef}>
      <div className="content">
        <div className="modal-header">
          <h2 className="modal-text">
            {answerIcon} {QuizQuestion.message}
          </h2>
        </div>
        <div className="modal-body">
          <h3 className="modal-text" data-testid="modal-points">
            Points: {QuizQuestion.points}
          </h3>
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
      </div>
    </dialog>
  );
};
export default QuizModal;
