import logo from './logo.svg';
import './App.css';

// A react component can only return 1 element. in the example below, it will only return 1 
// h1 element. To return 2 or more, it needs to be placed within a div. 

function Header(name) {
  console.log(name)
  return <h1>{name} was here</h1>
}

function App() {
  return (
    <div className="App">
      <Header name="Tara" />
      <header className="App-header">
        <h1>My First React App</h1>
        <h2>by Tara Jane Seton</h2>
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
      </header>
    </div>
  );
}

export default App;
