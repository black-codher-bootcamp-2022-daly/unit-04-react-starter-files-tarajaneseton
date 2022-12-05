import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
//import data from './models/headphones.json';

import GadgetList from './components/GadgetList';
import ClickCounter from './components/ClickCounter';

const mainStyle = {"fontFamily":"Arial"};

const App = () => {
  const headphones =  [{"title":"Headphones 1"},{"title":"Headphones 2"},{"title":"Headphones 3"},{"title":"Headphones 4"},];
  const [headphonesList] = useState(headphones); //headphonesList is a function, useState is a React function that allows us to say headphoneslist is equal to the array headphones.

return <section style={mainStyle}>
    <h1>Electronics Store</h1>
    <GadgetList items={headphonesList}/>
    <ClickCounter /> 
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

//Line 8 is a component, i know this because () => { tells me its a function, and App is uppercase which makes it a component. Below it returns some html, h1.
//Line 16 Gadgetlist is a component that accepts a headphonelist as a prop, which is defined in line 9. Line 10 makes use of UseState as a function that enables the Gadgetlist to be updated live, without having to update everything else. It's a special React function
//line 11 headphoneslist is a const we define in line 10, useState is a special function from React which allows us to pass a value (from line 9) e.g. headphoneslist is equal to the headphones array in line 9