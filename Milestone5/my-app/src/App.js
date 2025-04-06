import './App.css';
import './index.css';
import React from 'react';

// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-500">
//       <button 
//         className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
//         I'm a button!
//       </button>
//     </div>
//   );
// }


// import HelloWorld from './HelloWorld'; 

// function App() {
//   return (
//     <div className="App">
//       <HelloWorld name="Focus Bear" /> {/* Passing 'Focus Bear' as a prop */}
//     </div>
//   );
// }

// import Counter from './Counter';

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// import ListInput from './ListInput';

// function App() {
//   return <ListInput />;
// }


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import Profile from './Profile';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// import EffectDemo from './EffectDemo';

// function App() {
//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <EffectDemo />
//     </div>
//   );
// }

// import ExpensiveList from './ExpensiveList';

// function App() {
//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <ExpensiveList />
//     </div>
//   );
// }

// import ParentComponent from './ParentComponent';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <ParentComponent />
//     </div>
//   );
// }

import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
