import React, { useState } from "react";
import styles from"./App.module.css"

function App() {
  const[input, setInput] = useState("");
  const[result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(previous => previous+value)
  }

  const handleReset = () => {
    setInput("")
    setResult("")
  }
  const handleCalculate =() => {
    try {
      setResult(eval(input).toString());
    } 
    catch (error) {
      setResult('Error');
    }
  }
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input value={input}/>
      <p>{result}</p>
      <div className={styles.buttons}>
        <button onClick={() =>handleClick("7")}>7</button>
        <button onClick={() =>handleClick("8")}>8</button>
        <button onClick={() =>handleClick("9")}>9</button>
        <button onClick={() =>handleClick("+")}>+</button>

        <button onClick={() =>handleClick("4")}>4</button>
        <button onClick={() =>handleClick("5")}>5</button>
        <button onClick={() =>handleClick("6")}>6</button>
        <button onClick={() =>handleClick("-")}>-</button>

        <button onClick={() =>handleClick("1")}>1</button>
        <button onClick={() =>handleClick("2")}>2</button>
        <button onClick={() =>handleClick("3")}>3</button>
        <button onClick={() =>handleClick("*")}>*</button>
        
        <button onClick={() =>handleReset()}>C</button>
        <button onClick={() =>handleClick("0")}>0</button>
        <button onClick={() =>handleCalculate()}>=</button>
        <button onClick={() =>handleClick("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
