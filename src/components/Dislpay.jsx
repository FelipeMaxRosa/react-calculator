import React from "react";
import "./Display.css";

export default function Dislpay(props) {
  const { value } = props;

  return <div className="display">{value}</div>;
}
