const WelcomePage = ({ start }) => {
  return (
    <>
      <h1>Welcome!</h1>
      <h2>Want to test your knowledge?</h2>
      <p>Take our quiz and have fun learning</p>
      <button onClick={start}>Start Quiz</button>
      <h2>Brand new to programming?</h2>
      <p>Learn to code with <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/learn/">freeCodeCamp</a></p>
      <p>You can also play the freeCodeCamp <a href="/" target="_blank" rel="noopener noreferrer">RPG Game</a> </p>
    </>
  )
}

export default WelcomePage;