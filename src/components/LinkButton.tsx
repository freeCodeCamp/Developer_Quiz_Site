import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import "../stylesheets/Button.css";
import "../stylesheets/LinkButton.css";
interface LinkButtonProps extends NavLinkProps {
  isLarge?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children, isLarge }) => {
  return (
    <NavLink
      to={to}
      className={`btn-default btn--link ${isLarge ? "large-btn" : ""}`}
    >
      {children}
    </NavLink>
  );
};

export default LinkButton;
