import React from 'react';

const ChildComponent = React.memo(({ onClick, clicks }) => {
  console.log("👶 ChildComponent re-rendered");
  return (
    <div>
      <p className="mb-2">Child clicks: {clicks}</p>
      <button 
        onClick={onClick} 
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Click Me
      </button>
    </div>
  );
});

export default ChildComponent;
