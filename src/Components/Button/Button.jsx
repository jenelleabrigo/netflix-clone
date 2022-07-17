import React from "react";
import "./Button.scss";

const Button = (props) => {
  return <button className="c-button">{props.text}</button>;
};

export default Button;
