import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import "../stylesheets/Button.css";
import "../stylesheets/ButtonLink.css";
interface ButtonLinkProps extends NavLinkProps {
  size?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ to, children, size }) => {
  return (
    <NavLink
      to={to}
      className={`btn-default btn--link ${size === "large" ? "large-btn" : ""}`}
    >
      {children}
    </NavLink>
  );
};

export default ButtonLink;
