import React from 'react';

const GadgetList = (props) => {

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (<div>{item.title}</div>))}
    </main>
  );
}

export default GadgetList;

//items comes from the headphones list as an attribute on line 14 in index.js, It's an array of information on line 9.
// map 