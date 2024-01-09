import React from "react";
import "../stylesheets/HeroSection.css";
import { ROUNDED_QUESTION_COUNT } from "../constants";
import ButtonLink from "./ButtonLink";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Learn to Code RPG Quiz</h1>
          <h2>
            Practice with{" "}
            <strong className="question-count">
              {ROUNDED_QUESTION_COUNT}+
            </strong>{" "}
            Questions
          </h2>
        </div>
        <div className="hero-button">
          <ButtonLink to="/quizzes" size="large">
            {`Get started (it's free)`}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
