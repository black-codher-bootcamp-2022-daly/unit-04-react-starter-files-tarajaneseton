import React from 'react';

function Gadget({item}) {

  return <div>{item.title}</div>;
}

const GadgetList = (props) => {

  return (
    <main>
      <h2>Headphones color {props.color}</h2>
      {props.items.map((item) => (
      <Gadget key={item.title} item={item} />
      ))}
    </main>
  );
}

export default GadgetList;

// component called gadgetlist, passing props to it.
//items comes from the headphones list as an attribute on line 14 in index.js, It's an array of information on line 9 in index.js
// map 

