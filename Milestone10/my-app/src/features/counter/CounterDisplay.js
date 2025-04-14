// src/features/counter/CounterDisplay.js

import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './counterSlice';

const CounterDisplay = () => {
  const count = useSelector(selectCount);

  return (
    <div className="text-center text-xl">
      <p>Current Count: {count}</p>
    </div>
  );
};

export default CounterDisplay;
