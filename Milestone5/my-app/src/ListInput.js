// src/ListInput.js
import React, { useState } from 'react';

function ListInput() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    setItems([...items, input]);
    setInput('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">My Dynamic List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded"
          placeholder="Enter item"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Add
        </button>
      </div>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-lg">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListInput;
