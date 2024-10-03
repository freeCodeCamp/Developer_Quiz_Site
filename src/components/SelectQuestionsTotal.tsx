import React from "react";
import { QUESTION_NUMS } from "../constants";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface SelectQuestionsTotalProps {
  startQuiz: (e: number) => void;
  selectedCategory: string;
  totalQuestions: number;
}

const SelectQuestionsTotal: React.FC<SelectQuestionsTotalProps> = ({
  totalQuestions,
  startQuiz
}) => {
  const navigate = useNavigate(); // React Router navigation
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

      {/* Custom Back Button to go to category selection */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)} // Go back to the previous page in history
      >
        Back
      </button>
    </div>
  );
};

export default SelectQuestionsTotal;
