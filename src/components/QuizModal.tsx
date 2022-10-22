import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { MouseEventHandler } from "react";

interface QuizQuestion {
  chosenAnswer: string;
  message: string;
  points: number;
  displayExplanation: string;
  showReference: string;
  nextQuestion: MouseEventHandler;
  show: boolean;
}

const QuizModal: React.FC<QuizQuestion> = QuizQuestion => {
  return (
    <>
      <Modal className="modal-styles" show={QuizQuestion.show}>
        <Modal.Header>
          <Modal.Title>
            <h2 className="modal-text">💡 {QuizQuestion.message}</h2>
            <h3 className="modal-text">Points: {QuizQuestion.points}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-btn" onClick={QuizQuestion.nextQuestion}>
            Next Question
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default QuizModal;
