import { Link } from 'react-router-dom';
import '../stylesheets/Button.css';

const Button = ({ text, path, isTransparent, size }) => {

  const getButtonClasses = () => {
    let classes = "btn-default";

    if (isTransparent) {
      classes += " " + "transparent-btn";
    }

    if (size == "large") {
      classes += " " + "large-btn";
    }

    return classes;
  }

  return (
    <>
      <Link to={path}>
        <button
          className={getButtonClasses()}>
          {text}
        </button>
      </Link>
    </>
  );
}

export default Button;