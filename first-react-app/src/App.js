import logo from './logo.svg';
import './App.css';

function Header() {
  return <h1>Tara was here</h1>
}

function App() {
  return (
    <div className="App">
      <Header />
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
const h1style = { 
  "fontSize": "30px", 
  "color": "#000000"
  };

export default App;
