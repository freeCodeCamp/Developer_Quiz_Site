import React from 'react';
import Button from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-text">Want to test your programming knowledge with <strong>600+</strong> Quiz Questions?</h1>
        <div className="hero-button">
          <Button 
            text="Get Started (it's free!)" 
            path="/start" />
        </div>
      </div>
    </div>
  ); 
}

export default HeroSection;