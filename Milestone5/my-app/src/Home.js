import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">🏠 Home Page</h1>
      <p>Welcome to the home page.</p>
      <Link to="/profile" className="text-blue-600 underline">Go to Profile</Link>
    </div>
  );
}

export default Home;
