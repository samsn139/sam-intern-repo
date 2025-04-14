// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // Adjust the import if needed
import App from './App';

// Create a store with counterReducer
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

test('renders counter and increment/decrement buttons', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Check if the counter value is initially 0
  const counterText = screen.getByText(/Counter Value: 0/i);
  expect(counterText).toBeTruthy();

  // Fire an increment action and check if the counter value changes
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.press(incrementButton);
  expect(screen.getByText(/Counter Value: 1/i)).toBeTruthy();

  // Fire a decrement action and check if the counter value changes
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.press(decrementButton);
  expect(screen.getByText(/Counter Value: 0/i)).toBeTruthy();
});
