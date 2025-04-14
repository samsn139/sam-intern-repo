import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, getCounterValue } from '../redux/counterSlice';

const CounterBox = () => {
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Counter: {count}</h2>
      <button onClick={() => dispatch(increment())} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
        +
      </button>
      <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">
        -
      </button>
    </div>
  );
};

export default CounterBox;
