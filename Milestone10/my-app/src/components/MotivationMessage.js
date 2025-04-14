import React from 'react';
import { useSelector } from 'react-redux';
import { getCounterValue } from '../redux/counterSlice';

const MotivationMessage = () => {
  const count = useSelector(getCounterValue);

  return (
    <div className="mt-4 text-center">
      {count > 10 ? (
        <p className="text-green-600">🔥 You're crushing it!</p>
      ) : (
        <p className="text-gray-500">🚀 Keep clicking!</p>
      )}
    </div>
  );
};

export default MotivationMessage;
