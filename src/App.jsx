// App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="expression"
        value={expression}
        readOnly
      />
      <input
        type="text"
        className="result"
        value={result}
        readOnly
      />
      <div className="buttons">
        <div className="button-row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="button-row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button className="equal" onClick={() => handleButtonClick('=')}>=</button>
          <button className="clear" onClick={() => handleButtonClick('C')}>C</button>
          <button className="operator" onClick={() => handleButtonClick('/')}>/</button> {/* Division button */}
        </div>
        <div className="button-row">
          <button className="delete" onClick={() => handleButtonClick('DEL')}>DEL</button> {/* Delete button */}
        </div>
      </div>
    </div>
  );
}

export default App;
