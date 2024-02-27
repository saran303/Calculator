import React, { useState } from "react";
import "./App.css"

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
    <div >
      <h1>React Calculator</h1>
      <input type="text" value={input}/>
      <p>{result}</p>
      <div className="buttons">
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


// import React, { useState } from 'react';
// import './App.css';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleButtonClick = (value) => {
//     setInput((prevInput) => prevInput + value);
//   };

//   const handleReset = () => {
//     setInput('');
//     setResult('');
//   };

//   const handleCalculate = () => {
//     try {
//       setResult(eval(input).toString());
//     } catch (error) {
//       setResult('Error');
//     }
//   };

//   return (
//     <div className="calculator">
//       <h1>React Calculator</h1>
//       <div>
//         <input className="input" value={input} />
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         <button onClick={() => handleButtonClick('7')}>7</button>
//         <button onClick={() => handleButtonClick('8')}>8</button>
//         <button onClick={() => handleButtonClick('9')}>9</button>
//         <button onClick={() => handleButtonClick('+')}>+</button>

//         <button onClick={() => handleButtonClick('4')}>4</button>
//         <button onClick={() => handleButtonClick('5')}>5</button>
//         <button onClick={() => handleButtonClick('6')}>-</button>
//         <button onClick={() => handleButtonClick('-')}>-</button>

//         <button onClick={() => handleButtonClick('1')}>1</button>
//         <button onClick={() => handleButtonClick('2')}>2</button>
//         <button onClick={() => handleButtonClick('3')}>3</button>
//         <button onClick={() => handleButtonClick('*')}>*</button>
        
//         <button onClick={handleReset}>C</button>
//         <button onClick={() => handleButtonClick('0')}>0</button>
//         {/* <button onClick={() => handleButtonClick('.')}>.</button> */}
//         <button onClick={handleCalculate}>=</button>
//         <button onClick={() => handleButtonClick('/')}>/</button>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <Calculator />
//     </div>
//   );
// }

// export default App;
