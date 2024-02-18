import React from "react";

interface SelectCategoryProps {
  category: string;
  categoriesArr: string[];
  selectQuiz: (category: string, index: number) => void;
  selectQuizNumber: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    category: string
  ) => void;
  startRandomQuiz: () => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a Category</h2>
      <div className="w-25 select-btn-div">
        {SelectCategoryProps.categoriesArr.map(
          (category: string, index: number) => (
            <button
              className="select-btns"
              onClick={() => SelectCategoryProps.selectQuiz(category, index)}
              value={category}
              key={index}
            >
              {category}
            </button>
          )
        )}
        <button
          className="select-btns"
          onClick={SelectCategoryProps.startRandomQuiz}
        >
          Random
        </button>
      </div>
    </div>
  );
};
export default SelectCategory;
