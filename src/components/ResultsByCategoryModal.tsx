import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { MouseEventHandler } from "react";
import { ScoreData } from "../types";

interface Results {
  allEarnedPoints: number;
  allPossiblePoints: number;
  pointsWithCategories: ScoreData[];
  hideResultsBreakdown: MouseEventHandler;
  show: boolean;
}

const ResultsModal: React.FC<Results> = Results => {
  return (
    <Modal className="modal-styles" show={Results.show}>
      <Modal.Header>
        <Modal.Title>
          <h1 className="modal-text">💡 Score Breakdown by Category</h1>
          <h2 className="modal-text">
            {Results.allEarnedPoints} out of {Results.allPossiblePoints}
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        {Results.pointsWithCategories.map(({ Category, Score }) => (
          <div key={Category}>
            <p className="resultCategoryHeading">{Category}: </p>
            <p className="resultCategoryScore">{Score}</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <button className="modal-btn" onClick={Results.hideResultsBreakdown}>
          Close Breakdown
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ResultsModal;
