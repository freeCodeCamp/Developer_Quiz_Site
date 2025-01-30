import React from "react";
import { CATEGORIES } from "../constants";
import { SelectCategoryProps } from "../types";

const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a Category</h2>
      <div className="select-btn-div">
        {CATEGORIES.map((category: string, index: number) => (
          <button
            className="select-btns"
            onClick={() => SelectCategoryProps.selectQuiz(category, index)}
            key={index}
          >
            {category}
          </button>
        ))}
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
