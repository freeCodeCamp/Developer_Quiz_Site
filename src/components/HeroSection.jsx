import React from 'react';
import Button from './Button';
import '../stylesheets/HeroSection.css';

const HeroSection = ({ start }) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Learn to Code RPG Quiz</h1>
          <h2>Practice with <strong>600+</strong> Questions</h2>
        </div>
        <div className="hero-button">
          <Button
            text="Get started (it's free)"
            handleClick={start}
            size="large" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;