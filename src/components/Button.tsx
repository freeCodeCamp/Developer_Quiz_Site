import "../stylesheets/Button.css";
import { MouseEventHandler, useMemo } from "react";

const Button: React.FC<{ text: String, isTransparent: boolean, size: string, handleClick: MouseEventHandler<HTMLElement> }>
  = ({ text, isTransparent, size, handleClick }) => {
  const getButtonClasses = useMemo(() => {
    let classes = "btn-default";
    if (size === "large") {
      classes = `${classes} large-btn`;
    }

    if (isTransparent) {
      classes = `${classes} transparent-btn`;
    }

    return classes;
  }, [size, isTransparent]);

  return (
    <button onClick={handleClick} className={getButtonClasses}>
      {text}
    </button>
  );
};

export default Button;
