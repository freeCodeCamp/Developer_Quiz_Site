import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const QuizModal = ({ message, points, displayExplanation, showReference, nextQuestion, show }) => {

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            <h2>{message}</h2>
            <h3>Points:{points}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{displayExplanation}</p>
          <a href={showReference} target="_blank" rel="noopener noreferrer">Learn more by reading this helpful article</a>
          <p>Wanna learn how to code? Play the <a target="_blank" href="/">Learn to Code RPG game</a></p>
        </Modal.Body>
        <Modal.Footer>
          <button variant="primary" onClick={nextQuestion}> Next Question </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default QuizModal;