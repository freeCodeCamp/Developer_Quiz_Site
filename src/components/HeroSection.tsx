import React from "react";
import Button from "./Button";
import "../stylesheets/HeroSection.css";
import { ROUNDED_QUESTION_COUNT } from "../constants";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/quizzes">
            <Button
              text="Get started (it's free)"
              handleClick={console.log}
              size="large"
              isTransparent={false}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
