import React from "react";

interface SelectQuizProps {
  startQuiz: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selectQuizArr: number[];
  selectedCategory: string; // Add the selectedCategory prop
  totalQuestions: number; // Add the totalQuestions prop
}

const SelectQuestionsTotal: React.FC<SelectQuizProps> = selectQuizProps => {
  const availableQuizLengths = selectQuizProps.selectQuizArr.filter(
    length => length <= selectQuizProps.totalQuestions
  );

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className="w-25 select-btn-div">
        {availableQuizLengths.map((choice: number, index: number) => (
          <button
            className="select-btns"
            onClick={e => selectQuizProps.startQuiz(e)}
            value={choice}
            key={index}
          >
            {choice}
          </button>
        ))}

        <button
          className="select-btns"
          onClick={selectQuizProps.startQuiz}
          value={selectQuizProps.totalQuestions}
        >
          All ({selectQuizProps.totalQuestions})
        </button>
      </div>
    </div>
  );
};
export default SelectQuestionsTotal;
