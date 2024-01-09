import React from "react";
import "../stylesheets/HeroSection.css";
import { ROUNDED_QUESTION_COUNT } from "../constants";
import LinkButton from "./LinkButton";

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
          <LinkButton to="/quizzes" isLarge>
            {`Get started (it's free)`}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
