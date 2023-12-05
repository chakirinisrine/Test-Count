import React, { useState } from 'react';
import './Count.css';

const Count = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const numberStyles = {
    fontSize: '3em',
    color: number > 0 ? 'blue' : number < 0 ? 'red' : 'inherit',
  };

  return (
    <div className="count-container">
      <h2 style={numberStyles}>{number}</h2>
      <button className="count-button decrement" onClick={decrement}>-</button>
      <button className="count-button increment" onClick={increment}>+</button>
    </div>
  );
};

export default Count;
