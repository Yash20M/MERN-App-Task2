import React from "react";
import "./Button.css";

const Button = ({ text, handleClick }) => {
  return (
    <>
      <button className="btn-donate" onClick={handleClick} type="submit">
        {text}
      </button>
    </>
  );
};

export default Button;
