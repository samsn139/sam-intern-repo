// src/Counter.js

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // state hook

  const handleClick = () => {
    setCount(count + 1); // update state
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Count: {count}</h1>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition-all"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
