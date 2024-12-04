import "../stylesheets/Button.css";
import React, { useMemo } from "react";
import { ButtonProps } from "../types";
const Button: React.FC<ButtonProps> = ButtonProps => {
  const getButtonClasses = useMemo(() => {
    let classes = "btn-default";
    if (ButtonProps.size === "large") {
      classes = `${classes} large-btn`;
    }

    if (ButtonProps.isTransparent) {
      classes = `${classes} transparent-btn`;
    }

    return classes;
  }, [ButtonProps.size, ButtonProps.isTransparent]);

  return (
    <button onClick={ButtonProps.handleClick} className={getButtonClasses}>
      {ButtonProps.text}
    </button>
  );
};

export default React.memo(Button);
