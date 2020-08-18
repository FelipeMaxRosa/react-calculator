import React, { useState } from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Dislpay";

export default function Calculator() {
  const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };

  const handleClickClearMemory = () => {
    setState(initialState);
  };

  const handleClickOperation = (operation) => {
    const newState = { ...state };

    if (state.current === 0) {
      newState.current = 1;
      newState.operation = operation;
      newState.clearDisplay = true;
    } else {
      const equals = operation === "=";
      const currentOperation = state.operation;

      const values = [...state.values];
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (err) {
        values[0] = state.values[0];
      }
      values[1] = 0;

      newState.displayValue = values[0];
      newState.operation = equals ? null : operation;
      newState.current = equals ? 0 : 1;
      newState.clearDisplay = !equals;
      newState.values = values;
    }
    setState(newState);
  };

  const handleClickAddDigit = (value) => {
    if (value === "." && state.displayValue.includes(".")) {
      return;
    }

    const newState = Object.assign([], state);

    const clearDisplay = state.displayValue === "0" || state.clearDisplay;
    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + value;

    newState.displayValue = displayValue;
    newState.clearDisplay = false;

    if (value !== ".") {
      const i = state.current;
      const newValue = parseFloat(displayValue);
      const values = newState.values;
      values[i] = newValue;
      newState.values = values;
    }
    setState(newState);
    console.log(newState);
  };

  // const [displayValue, setDisplayValue] = useState("0");
  // const [clearDisplay, setClearDisplay] = useState(false);
  // const [operation, setOperation] = useState(null);
  // const [values, setValues] = useState([0, 0]);
  // const [current, setCurrent] = useState(0);
  const [state, setState] = useState(initialState);

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <Button label="AC" onClick={handleClickClearMemory} triple />
      <Button label="/" onClick={handleClickOperation} operation />
      <Button label="7" onClick={handleClickAddDigit} />
      <Button label="8" onClick={handleClickAddDigit} />
      <Button label="9" onClick={handleClickAddDigit} />
      <Button label="*" onClick={handleClickOperation} operation />
      <Button label="4" onClick={handleClickAddDigit} />
      <Button label="5" onClick={handleClickAddDigit} />
      <Button label="6" onClick={handleClickAddDigit} />
      <Button label="-" onClick={handleClickOperation} operation />
      <Button label="1" onClick={handleClickAddDigit} />
      <Button label="2" onClick={handleClickAddDigit} />
      <Button label="3" onClick={handleClickAddDigit} />
      <Button label="+" onClick={handleClickOperation} operation />
      <Button label="0" onClick={handleClickAddDigit} double />
      <Button label="." onClick={handleClickAddDigit} />
      <Button label="=" onClick={handleClickOperation} operation />
    </div>
  );
}
