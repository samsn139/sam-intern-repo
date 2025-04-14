// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state of the counter
const initialState = {
  value: 0,
};

// Create a slice of the store with actions and reducers
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export the actions from the slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the selector to access the counter value
export const getCounterValue = (state) => state.counter.value;

// Export the reducer to add to the store
export default counterSlice.reducer;
