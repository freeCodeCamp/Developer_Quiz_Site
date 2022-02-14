import '../stylesheets/Navbar.css';
import fccLogo from '../images/fcc_primary_large.png'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="homepage-navbar">
           <a target="_blank" href="https://www.freecodecamp.org/">
            <img className="website-logo" src={fccLogo} alt="freeCodeCamp logo"/>
           </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
