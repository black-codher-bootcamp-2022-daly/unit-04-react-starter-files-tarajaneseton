import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
//import data from './models/headphones.json';

import GadgetList from './components/GadgetList';
const mainStyle = {"fontFamily":"Arial"};

const App = () => {
  const headphones =  [{"title":"Headphones 1"},{"title":"Headphones 2"},{"title":"Headphones 3"},{"title":"Headphones 4"},];
  const [headphonesList] = useState(headphones); //headphonesList is a function, useState is coming from React, line 1. It allows us to have a state inside
  // our compnent so we can update it. 

return <section style={mainStyle}>
    <h1>Electronics Store</h1>
    <GadgetList items={headphonesList}/> /
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

//Line 8 is a component, i know this because () => { tells me its a function, and App is uppercase which makes it a component. Below it returns some html, h1.
//Line 16 Gadgetlist is a component that accepts a headphonelist as a prop, which is define in line 9
//line 11 headphoneslist is a const we define in line 10, useState is a special function from React which allows us to pass a value (from line 9) e.g. headphoneslist is equal to the headphones array in line 9