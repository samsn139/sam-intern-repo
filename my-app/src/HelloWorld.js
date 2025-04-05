// src/HelloWorld.js

import React from 'react';

// Functional component that receives a 'name' prop and displays it
function HelloWorld({ name }) {
    return (
        <h1 className="text-4xl font-bold text-center text-blue-600 mt-10">
          Hello, {name}!
        </h1>
      );
    }
    
export default HelloWorld;
