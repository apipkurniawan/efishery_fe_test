import React from "react";
import "./Button.scss";

const Button: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  class?: string;
  style?: {};
}> = (props) => {
  return (
    <button
      style={props.style}
      className={`button ${props.class}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
