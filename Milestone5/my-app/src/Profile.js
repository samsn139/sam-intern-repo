import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">👤 Profile Page</h1>
      <p>This is the profile page.</p>
      <Link to="/" className="text-blue-600 underline">Back to Home</Link>
    </div>
  );
}

export default Profile;
