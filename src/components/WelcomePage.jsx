import rpgMenu from '../images/rpg-menu.png';
import homeImg1 from '../images/home-img1.jpg';
import homeImg2 from '../images/home-img2.jpg';
import { Link } from "react-router-dom";


const WelcomePage = ({ start }) => {
  const imgWidth = { width: '80%' }
  return (
    <>
      <main className="text-center">
        <h1 className="mt-2 featurette-heading">Learn to Code RPG Multiple Choice Questions!</h1>
        <img src={rpgMenu} className="img-fluid" style={imgWidth} alt="freeCodeCamp" />

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Want to test your programming knowledge?</h2>
            <p className="lead">Brush up on HTML, CSS, JavaScript, Linux, Python, Git, SQL, IT and general Computer Science concepts, with <span style={{ fontWeight: '700' }}>600+</span> questions.</p>
            <p className="lead">Take our quiz and have fun learning!</p>
            <Link to="/misc" className="btn btn-primary btn-xl rounded-pill mb-4">Start Quiz</Link>
          </div>
          <div className="col-md-5">
            <img src={homeImg1} className="img-fluid rounded" style={imgWidth} alt="female software engineers" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Brand new to programming?</h2>
            <p className="lead">Learn to code for free and start your programming journey with <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/learn/">freeCodeCamp</a>.</p>
            <h3 style={{ marginTop: '40px' }} className="featurette-heading">Want to learn how to code while playing a game?</h3>
            <p className="lead"> Give the freeCodeCamp <a href="/" target="_blank" rel="noopener noreferrer">Learn to Code RPG Game</a> a go!</p>
            <p className="lead">Available for free download on Windows, Mac and Linux.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={homeImg2} className="img-fluid rounded" style={imgWidth} alt="female software engineers" />
          </div>
        </div>
      </main>
    </>
  )
}

export default WelcomePage;

