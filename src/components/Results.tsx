import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

interface PointTotals {
  points: number;
  totalQuestions: number;
  resetQuiz: () => void;
}

const Results: React.FC<PointTotals> = ({
  points,
  totalQuestions,
  resetQuiz
}: PointTotals) => {
  const totalPercentageCorrect = (Math.floor(points) / totalQuestions) * 100;
  const tweetMessage = `http://twitter.com/intent/tweet?text=I just scored ${totalPercentageCorrect}%25 on developerquiz.org. Wanna try it for yourself?&hashtags=freecodecamp`;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Update window size when it changes
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (points === totalQuestions) {
      setShowConfetti(true);

      // Remove the confetti after 5 seconds
      const confettiTimeout = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      // Clean up the timeout on unmount
      return () => {
        clearTimeout(confettiTimeout);
      };
    }
  }, [points, totalQuestions]);

  return (
    <div className="results-div">
      <h1 className="results-heading">Results</h1>
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <h2>
        {points === totalQuestions ? "Wow! Perfect Score!" : "You received"}{" "}
        {points} out of {totalQuestions} points
      </h2>
      <p className="results-text">
        Wanna learn how to code? Download the free:&nbsp;
        <a
          className="results-rpg-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.freecodecamp.org/news/learn-to-code-rpg/"
        >
          RPG game
        </a>
      </p>

      <button onClick={resetQuiz} className="results-btn">
        Play again?
      </button>

      {totalPercentageCorrect >= 70 && (
        <a
          target="_blank"
          rel="noreferrer"
          className="results-text"
          href={tweetMessage}
        >
          <i className="fab fa-twitter" /> Tweet your quiz score
        </a>
      )}
    </div>
  );
};
export default Results;
