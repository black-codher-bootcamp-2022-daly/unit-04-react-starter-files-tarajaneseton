import logo from './logo.svg';
import './App.css';

// A react component can only return 1 element. in the example below, it will only return 1 
// h1 element. To return 2 or more, it needs to be placed within a div. 

function Header(props) {
  const { name, colour, fruit, className } = props;
  return (
  <h1 className={className}>
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
      <Header className="header-tara" "Tara"  colour="blue" fruit="blueberry"/>
      <Header name="Tanya"  colour="orange" fruit="orange"/>
      <Footer nickname="Jimy">
        </div>
        );
        }
        


export default App;
