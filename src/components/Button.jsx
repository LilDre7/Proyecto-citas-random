import React from "react";
import "./Styles/Button.css";

const Button = ({ handleNewQuote }) => {
  return <button className="container_button" onClick={handleNewQuote}>Probar mi suerte</button>;
};

export default Button;
