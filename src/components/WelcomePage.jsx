import rpgMenu from '../images/rpg-menu.png';

const WelcomePage = ({ start }) => {
  const imgWidth = { width: '80%' }
  return (
    <>
      <header className="text-center">
        <h1 className="mt-2">Learn to Code RPG Multiple Choice Questions!</h1>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={rpgMenu} style={imgWidth} alt="freeCodeCamp RPG game" />
            </div>
            <div className="carousel-item">
              <img src="..." style={imgWidth} alt="freeCodeCamp RPG game" />
            </div>
            <div className="carousel-item">
              <img src="..." style={imgWidth} alt="freeCodeCamp RPG game" />
            </div>
          </div>
        </div>

        <h2>Want to test your  programming knowledge?</h2>
        <p>Brush up on HTML,CSS,JavaScript,Linux,Python,Git,SQL,IT and general Computer Science Concepts, with 600+ questions.</p>
        <p>Take our quiz and have fun learning!</p>
        <button className="btn btn-primary btn-xl rounded-pill" onClick={start}>Start Quiz</button>
        <h2>Brand new to programming?</h2>
        <p>Learn to code for free and start your programming journey with <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/learn/">freeCodeCamp</a></p>
        <p>Want to learn how to code while playing a game?  Give the freeCodeCamp <a href="/" target="_blank" rel="noopener noreferrer">Learn to Code RPG Game</a> a go! </p>
      </header>

    </>
  )
}

export default WelcomePage;

