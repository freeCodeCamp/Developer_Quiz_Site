import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { MouseEventHandler } from "react";
import { CATEGORY_NAMES } from "../constants";

interface Results {
  infoTechPoints: number;
  javascriptPoints: number;
  linuxPoints: number;
  pythonPoints: number;
  qualityAssurancePoints: number;
  securityPoints: number;
  sqlPoints: number;
  allEarnedPoints: number;
  allPossiblePoints: number;
  accessibilityPoints: number;
  agilePoints: number;
  cssPoints: number;
  generalPoints: number;
  gitPoints: number;
  htmlPoints: number;
  hideResultsBreakdown: MouseEventHandler;
  show: boolean;
}

const ResultsModal: React.FC<Results> = Results => {
  return (
    <Modal className='modal-styles' show={Results.show}>
      <Modal.Header>
        <Modal.Title>
          <h1 className='modal-text'>💡 Score Breakdown by Category</h1>
          <h2 className='modal-text'>
            {Results.allEarnedPoints} out of {Results.allPossiblePoints}
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.AGILE} :</p>
          <p className='resultCategoryScore'>{Results.agilePoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>
            {CATEGORY_NAMES.ACCESSIBILITY} :
          </p>
          <p className='resultCategoryScore'>{Results.accessibilityPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.CSS} :</p>
          <p className='resultCategoryScore'>{Results.cssPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.GENERAL} :</p>
          <p className='resultCategoryScore'>{Results.generalPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.GIT} :</p>
          <p className='resultCategoryScore'>{Results.gitPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.HTML} :</p>
          <p className='resultCategoryScore'>{Results.htmlPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.INFOTECH} :</p>
          <p className='resultCategoryScore'>{Results.infoTechPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.JAVASCRIPT} :</p>
          <p className='resultCategoryScore'>{Results.javascriptPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.LINUX} :</p>
          <p className='resultCategoryScore'>{Results.linuxPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.PYTHON} :</p>
          <p className='resultCategoryScore'>{Results.pythonPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>
            {CATEGORY_NAMES.QUALITYASSURANCE} :
          </p>
          <p className='resultCategoryScore'>
            {Results.qualityAssurancePoints}
          </p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.SECURITY} :</p>
          <p className='resultCategoryScore'>{Results.securityPoints}</p>
        </div>
        <div>
          <p className='resultCategoryHeading'>{CATEGORY_NAMES.SQL} :</p>
          <p className='resultCategoryScore'>{Results.sqlPoints}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-btn' onClick={Results.hideResultsBreakdown}>
          Close Breakdown
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ResultsModal;
