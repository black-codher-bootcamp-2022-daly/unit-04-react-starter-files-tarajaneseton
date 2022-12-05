import React, { useState} from 'react';

const ClickCounter = () => {
  const buttonStyle = {};
  const [count, setCount] = useState(0);
  // below is a const to ensure count is lower or equal to zero
  const isCountZero = count <= 0
  // decrement is where if countzero is true it means that count is zero, return zero, else return count -1
  const decrement = isCountZero ?  0 : count - 1
  const increment = count + 1
// after renaming the variable as increment/decrement, replace related variable below.
  return (
      <div>
      <h2>Count: {count}</h2>
      <div>Click the button below to increment the counter</div>
      <button style={buttonStyle} onClick={() => setCount(increment)}>Click!</button>
    
      <button style={buttonStyle} onClick={() => setCount(decrement)}>Unclick!</button>

      </div>
    );
   }
  
  export default ClickCounter;