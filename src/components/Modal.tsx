import React, { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import "../stylesheets/Modal.css";
const modalRoot = document.getElementById("modal");

interface ModalComponentProps {
  children?: ReactNode;
}

const Title: React.FC<ModalComponentProps> = ({ children }) => (
  <div>{children}</div>
);
const Header: React.FC<ModalComponentProps> = ({ children }) => (
  <header>{children}</header>
);
const Body: React.FC<ModalComponentProps> = ({ children }) => (
  <div className="modal-body">{children}</div>
);
const Footer: React.FC<ModalComponentProps> = ({ children }) => (
  <footer>{children}</footer>
);
interface ModalWrapComponentProps {
  children: React.ReactNode;
  show: boolean;
}

type SubComponents = {
  Header: typeof Header;
  Title: typeof Title;
  Footer: typeof Footer;
  Body: typeof Body;
};

const Modal: React.FC<ModalWrapComponentProps> & SubComponents = ({
  children,
  show
}: ModalWrapComponentProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.setAttribute("class", "modal-wrap");
    elRef.current.setAttribute("role", "dialog");
    elRef.current.setAttribute("aria-modal", "true");
  }

  useEffect(() => {
    if (modalRoot && elRef.current) {
      modalRoot.appendChild(elRef.current);
      return () => {
        if (elRef.current) modalRoot.removeChild(elRef.current);
      };
    }
  }, []);

  return elRef.current
    ? createPortal(<>{show && <>{children}</>}</>, elRef.current)
    : null;
};

Modal.Title = Title;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
