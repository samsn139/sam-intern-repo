import React, { useMemo, useState } from 'react';

// Simulate an expensive computation
const expensiveCalculation = (numbers) => {
  console.log("🔁 Running expensive calculation...");
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < 1000; j++) {
      total += numbers[i] * Math.random(); // simulate CPU load
    }
  }
  return total.toFixed(2);
};

function ExpensiveList() {
  const [count, setCount] = useState(0);

  // Generate a large array of numbers
  const numbers = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => i + 1);
  }, []);

  // Memoize expensive calculation
  const calculatedTotal = useMemo(() => expensiveCalculation(numbers), [numbers]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">useMemo Demo</h2>
      <p className="mb-2">Calculated Total: {calculatedTotal}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Re-render Component ({count})
      </button>
    </div>
  );
}

export default ExpensiveList;
