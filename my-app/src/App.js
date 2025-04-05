import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <button 
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
        I'm a button!
      </button>
    </div>
    
  );
}

export default App;
