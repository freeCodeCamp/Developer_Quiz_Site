import '../stylesheets/Navbar.css';
import Button from './Button';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="homepage-navbar">
          <img className="website-logo" src="../../fcc_primary_large.png" alt="freeCodeCamp logo" />
        </nav>
      </header>
    </>
  );
}

export default Navbar;