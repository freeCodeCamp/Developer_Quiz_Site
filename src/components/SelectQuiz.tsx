import React from "react";

interface SelectQuizProps {
  startQuiz: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selectQuizArr: number[];
}

const SelectQuiz: React.FC<SelectQuizProps> = SelectQuizProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a length for the Quiz</h2>
      <div className="w-25 select-btn-div">
        {SelectQuizProps.selectQuizArr.map(
          (choice: number, index: number, array: number[]) => (
            <button
              className="select-btns"
              onClick={e => SelectQuizProps.startQuiz(e)}
              value={choice}
              key={index}
            >
              {index == array.length - 1 ? `All (${choice})` : `${choice}`}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default SelectQuiz;
