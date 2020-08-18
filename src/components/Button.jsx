import React from "react";
import "./Button.css";

export default function Button(props) {
  const { label, operation, double, triple, onClick } = props;

  let classes = "btn ";
  classes += operation ? "operation " : "";
  classes += double ? "double " : "";
  classes += triple ? "triple " : "";

  const handleButtonClick = (event) => {
    onClick(event.target.innerHTML);
  };

  return (
    <button className={classes} onClick={handleButtonClick}>
      {label}
    </button>
  );
}
