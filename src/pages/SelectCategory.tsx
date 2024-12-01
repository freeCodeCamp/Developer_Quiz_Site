import React from "react";
import { CATEGORIES } from "../constants";
import { SelectCategoryProps } from "../types";
import Selectable from "../components/Selectable";

const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a Category</h2>
      <Selectable
        options={CATEGORIES}
        groupName="categories"
        onChange={category =>
          category === "Random"
            ? SelectCategoryProps.startRandomQuiz()
            : SelectCategoryProps.selectQuiz(category, 0)
        }
      />
    </div>
  );
};
export default SelectCategory;
