import React from "react";

const Button = ({ type = "button", onClick, disabled, className, children }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={
      `${className} disabled:opacity-50 disabled:cursor-not-allowed`}
  >
    {children}
  </button>
);

export default Button;
