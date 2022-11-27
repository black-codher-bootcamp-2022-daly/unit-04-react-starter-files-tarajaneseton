import logo from './logo.svg';
import './App.css';

function Header(props) {
  const { name, colour, fruit, className } = props;
  return (
  <h1 className={className} >
    {name} is {colour} like a {fruit}
    </h1>
  );
}

function Footer ({ nickname }) {
  return (
    <div>
      <h1> goodbye {nickname} </h1>
        </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header className="header-tara" name="Tara" colour="blue" fruit="blueberyy"/>
        <Header name="Tanya" colour="orange" fruit="orange" />
        <Footer nickname="Taz"/>
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
