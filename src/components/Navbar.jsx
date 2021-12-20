import './Navbar.css';
import Button from './Button';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="homepage-navbar">
          <img className="website-logo" src="../../fcc_primary_large.png" alt="freeCodeCamp logo" />
          <ul className="navbar-buttons">
            <Button text="About" path="/about" isTransparent={true}/>
            <Button text="Start" path="/start" isTransparent={false}></Button>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;