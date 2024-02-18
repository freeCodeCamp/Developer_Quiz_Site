import React from "react";

interface SelectQuestionsTotalProps {
  startQuiz: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  questionsNumArr: number[];
  selectedCategory: string; // Add the selectedCategory prop
  totalQuestions: number; // Add the totalQuestions prop
}

const SelectQuestionsTotal: React.FC<SelectQuestionsTotalProps> = ({
  questionsNumArr,
  totalQuestions,
  startQuiz
}) => {
  const availableQuizLengths = questionsNumArr.filter(
    length => length <= totalQuestions
  );

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className="w-25 select-btn-div">
        {availableQuizLengths.map((choice: number, index: number) => (
          <button
            className="select-btns"
            onClick={e => startQuiz(e)}
            value={choice}
            key={index}
          >
            {choice}
          </button>
        ))}

        <button
          className="select-btns"
          onClick={startQuiz}
          value={totalQuestions}
        >
          All ({totalQuestions})
        </button>
      </div>
    </div>
  );
};
export default SelectQuestionsTotal;
