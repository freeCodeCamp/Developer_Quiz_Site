const WelcomePage = ({ start }) => {
  return (
    <>
      <h1>Welcome to Learn to Code RPG Multiple Choice Questions!</h1>
      <h2>Want to test your  programming knowledge?</h2>
      <p>Brush up on HTML,CSS,JavaScript,Linux,Python,Git,SQL,IT and general Computer Science Concepts, with 600+ questions.</p>
      <p>Take our quiz and have fun learning!</p>
      <button onClick={start}>Start Quiz</button>
      <h2>Brand new to programming?</h2>
      <p>Learn to code for free and start your programming journey with <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/learn/">freeCodeCamp</a></p>
      <p>Want to learn how to code while playing a game?  Download the freeCodeCamp <a href="/" target="_blank" rel="noopener noreferrer">Learn to Code RPG Game</a> </p>
    </>
  )
}

export default WelcomePage;