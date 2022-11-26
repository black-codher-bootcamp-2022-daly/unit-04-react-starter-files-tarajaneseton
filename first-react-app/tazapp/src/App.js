import logo from './logo.svg';
import './App.css';

// A react component can only return 1 element. in the example below, it will only return 1 
// h1 element. To return 2 or more, it needs to be placed within a div. 

function Header(props) {
  const { name, colour, fruit } = props;
  return (
  <h1>
    {name} is {colour} like a {fruit}
    </h1>
  );
}

function Footer({nickname}) {
  return (
  <div>
   <h1> goodbye {nickname}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header className="header-highlight" "Tara"  colour="blue" fruit="blueberry"/>
      <Header name="Tanya"  colour="orange" fruit="orange"/>

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
      <Footer nickname="Taz"/>
    </div>
  );
}

export default App;
