import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  // Without useCallback, this function would get a new reference on every render
  const handleClick = useCallback(() => {
    setClicks(prev => prev + 1);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">useCallback Demo</h2>
      <p className="mb-2">Count: {count}</p>
      <button 
        onClick={increment} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Re-render Parent
      </button>

      <ChildComponent onClick={handleClick} clicks={clicks} />
    </div>
  );
}

export default ParentComponent;
