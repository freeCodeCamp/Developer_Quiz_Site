import '../stylesheets/Button.css';

const Button = ({ text, isTransparent, size, handleClick }) => {

  const getButtonClasses = () => {
    let classes = "btn-default";

    if (isTransparent) {
      classes = "btn-default transparent-btn";
    }

    if (size === "large") {
      classes = "btn-default large-btn";
    }

    return classes;
  }

  return (
    <button onClick={handleClick} className={getButtonClasses()}>{text}</button>
  );
}

export default Button;