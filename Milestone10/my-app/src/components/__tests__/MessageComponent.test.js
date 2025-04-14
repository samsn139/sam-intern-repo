// src/components/__tests__/MessageComponent.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import MessageComponent from '../MessageComponent';

// Test case to check if the message is rendered correctly
test('renders message correctly', () => {
  render(<MessageComponent />);
  const messageElement = screen.getByText(/Hello, World!/i); // Case-insensitive matching
  expect(messageElement).toBeInTheDocument();
});

// Test case to simulate user interaction (button click)
test('changes message when button is clicked', () => {
  render(<MessageComponent />);
  
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);  // Simulate button click

  const updatedMessage = screen.getByText(/You clicked the button!/i);
  expect(updatedMessage).toBeInTheDocument();
});
