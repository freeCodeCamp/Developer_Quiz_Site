import React from "react";

interface SelectQuizProps {
  startQuiz: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selectQuizArr: number[];
  selectedCategory: string; // Add the selectedCategory prop
  totalQuestions: number; // Add the totalQuestions prop
}

const SelectQuiz: React.FC<SelectQuizProps> = SelectQuizProps => {
  const availableQuizLengths = SelectQuizProps.selectQuizArr.filter(
    length => length <= SelectQuizProps.totalQuestions
  );

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className="w-25 select-btn-div">
        {availableQuizLengths.map((choice: number, index: number) => (
          <button
            className="select-btns"
            onClick={e => SelectQuizProps.startQuiz(e)}
            value={choice}
            key={index}
          >
            {choice}
          </button>
        ))}

        <button
          className="select-btns"
          onClick={SelectQuizProps.startQuiz}
          value={SelectQuizProps.totalQuestions}
        >
          All ({SelectQuizProps.totalQuestions})
        </button>
      </div>
    </div>
  );
};
export default SelectQuiz;
