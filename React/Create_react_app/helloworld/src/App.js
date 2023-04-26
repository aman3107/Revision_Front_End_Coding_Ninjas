import logo from './logo.svg';
import './App.css';
import {a,arr,obj} from './index'
import greet  from './index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Welcome to React Course on codingninjas.com</p>
      </header>
    </div>
  );
}

console.log(a);
console.log(arr);
console.log(obj);
greet();
// greet();

export default App;
