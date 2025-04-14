import React, { useEffect, useState } from 'react';

function EffectDemo() {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);

  // Logs when component mounts/unmounts
  useEffect(() => {
    console.log('✅ Component mounted');

    return () => {
      console.log('❌ Component unmounted');
    };
  }, []);

  // Fetch data when button is clicked
  const fetchData = async () => {
    setFetching(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
    setFetching(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">useEffect Demo</h2>
      <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Fetch Data
      </button>

      {fetching && <p className="mt-2">Loading...</p>}
      {data && (
        <div className="mt-4 p-2 border border-gray-300 rounded">
          <h3 className="font-bold">{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default EffectDemo;
