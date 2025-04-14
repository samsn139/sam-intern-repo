// src/features/counter/counterSlice.test.js
import counterReducer, { increment, decrement, incrementByAmount } from './counterSlice';

describe('counter reducer', () => {
  // Test initial state
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });

  // Test increment action
  it('should handle increment', () => {
    const initialState = { value: 0 };
    const action = increment();
    const state = counterReducer(initialState, action);
    expect(state.value).toEqual(1);
  });

  // Test decrement action
  it('should handle decrement', () => {
    const initialState = { value: 1 };
    const action = decrement();
    const state = counterReducer(initialState, action);
    expect(state.value).toEqual(0);
  });

  // Test incrementByAmount action
  it('should handle incrementByAmount', () => {
    const initialState = { value: 0 };
    const action = incrementByAmount(5);
    const state = counterReducer(initialState, action);
    expect(state.value).toEqual(5);
  });
});
