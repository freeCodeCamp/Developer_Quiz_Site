import React from "react";
import { CATEGORIES } from "../constants";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface SelectCategoryProps {
  selectQuiz: (category: string, index: number) => void;
  startRandomQuiz: () => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = SelectCategoryProps => {
  const navigate = useNavigate(); // React Router navigation

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

      {/* Custom Back Button to go to the main page */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)} // Go back to the previous page in history
      >
        Back
      </button>
    </div>
  );
};

export default SelectCategory;
