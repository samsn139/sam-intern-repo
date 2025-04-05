import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react';
import HelloWorld from './HelloWorld'; 

function App() {
  return (
    <div className="App">
      <HelloWorld name="Focus Bear" /> {/* Passing 'Focus Bear' as a prop */}
    </div>
  );
}

export default App;
