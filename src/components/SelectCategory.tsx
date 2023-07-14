import React from "react";

interface SelectCategoryProps {
  startQuiz: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  SelectCategoryArr: string[]
}
const SelectCategoryArr: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "Accessibility",
    "General CS",
    "IT",
    "Linux",
    "Python",
    "SQL"
  ];
  
const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Choose a Category</h2>
      <div className="w-25 select-btn-div">
        {SelectCategoryProps.SelectCategoryArr.map(
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
