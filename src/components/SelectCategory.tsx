import React from "react";

interface SelectCategoryProps {
  startQuiz: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selectCategoryArr: string[]
}
  
const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a Category</h2>
      <div className="w-25 select-btn-div">
        {SelectCategoryProps.selectCategoryArr.map(
          (category: string, index: number) => (
            <button
              className="select-btns"
              onClick={e => SelectCategoryProps.startQuiz(e)}
              value={category}
              key={index}
            >
             {category}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default SelectCategory;
