import React, { MouseEventHandler } from "react";
import { CATEGORY_NAMES } from "../constants";
import { ScoreData } from "../types";
import ResultsModal from "./ResultsByCategoryModal";

interface QuestionCategories {
  agileQuestionsCorrect: number;
  accessibilityQuestionsCorrect: number;
  cloudComputingQuestionsCorrect: number;
  cssQuestionsCorrect: number;
  freeCodeCampQuestionsCorrect: number;
  generalCSQuestionsCorrect: number;
  gitQuestionsCorrect: number;
  htmlQuestionsCorrect: number;
  infoTechQuestionsCorrect: number;
  javascriptQuestionsCorrect: number;
  linuxQuestionsCorrect: number;
  pythonQuestionsCorrect: number;
  qualityAssuranceQuestionsCorrect: number;
  securityQuestionsCorrect: number;
  sqlQuestionsCorrect: number;
  regexQuestionsCorrect: number;
}

interface PointTotals {
  points: number;
  totalPoints: number;
  resetQuiz: MouseEventHandler<HTMLButtonElement>;
  hideResultsBreakdown: MouseEventHandler;
  questionCategories: QuestionCategories;
  show: boolean;
}

const Results: React.FC<PointTotals> = PointTotals => {
  const totalPercentageCorrect =
    (Math.floor(PointTotals.points) / PointTotals.totalPoints) * 100;
  const tweetMessage = `http://twitter.com/intent/tweet?text=I just scored ${totalPercentageCorrect}%25 on developerquiz.org. Wanna try it for yourself?&hashtags=freecodecamp`;
  const categoryTotals = Object.values(PointTotals.questionCategories);
  const scoreTotalArray: ScoreData[] = Object.values(CATEGORY_NAMES).map(
    (category, idx) => ({
      Category: category,
      Score: categoryTotals[idx]
    })
  );

  return (
    <div className="results-div">
      <h1 className="results-heading">Results</h1>
      <h2>
        {PointTotals.points === PointTotals.totalPoints
          ? "Wow! Perfect Score!"
          : "You received"}{" "}
        {PointTotals.points} out of {PointTotals.totalPoints} points
      </h2>
      <p className="results-text">
        Wanna learn how to code? Download the free:&nbsp;
        <a
          className="results-rpg-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.freecodecamp.org/news/learn-to-code-rpg/"
        >
          RPG game
        </a>
      </p>
      <ResultsModal
        allEarnedPoints={PointTotals.points}
        allPossiblePoints={PointTotals.totalPoints}
        pointsWithCategories={scoreTotalArray}
        show={PointTotals.show}
        hideResultsBreakdown={PointTotals.hideResultsBreakdown}
      />

      <button onClick={PointTotals.resetQuiz} className="results-btn">
        Play again?
      </button>

      {totalPercentageCorrect >= 70 && (
        <a
          target="_blank"
          rel="noreferrer"
          className="results-text"
          href={tweetMessage}
        >
          <i className="fab fa-twitter" /> Tweet your quiz score
        </a>
      )}
    </div>
  );
};
export default Results;
