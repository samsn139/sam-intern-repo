// src/components/MessageComponent.js
import React, { useState } from 'react';

const MessageComponent = () => {
  const [message, setMessage] = useState('Hello, World!');

  const changeMessage = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={changeMessage}>Click Me</button>
    </div>
  );
};

export default MessageComponent;
