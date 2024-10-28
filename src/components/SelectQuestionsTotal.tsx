import React from "react";
import { QUESTION_NUMS } from "../constants";

interface SelectQuestionsTotalProps {
  startQuiz: (e: number) => void;
  totalQuestions: number; // Add the totalQuestions prop
}

const SelectQuestionsTotal: React.FC<SelectQuestionsTotalProps> = ({
  totalQuestions,
  startQuiz
}) => {
  const availableQuizLengths = QUESTION_NUMS.filter(
    length => length <= totalQuestions
  );

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className="select-btn-div">
        {availableQuizLengths.map((choice: number, index: number) => (
          <button
            className="select-btns"
            onClick={() => startQuiz(choice)}
            key={index}
          >
            {choice}
          </button>
        ))}

        <button
          className="select-btns"
          onClick={() => startQuiz(totalQuestions)}
        >
          All ({totalQuestions})
        </button>
      </div>
    </div>
  );
};
export default SelectQuestionsTotal;
