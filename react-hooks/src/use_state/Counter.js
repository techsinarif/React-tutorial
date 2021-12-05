import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseFive = () => {
    for(let i=0; i < 5; i++){
      setCount(prevState => prevState + 1);
    }
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me!</button>
      <p>Current value of count is {count}</p>
      <button onClick={() => increaseFive()}>click me to add 5</button>
    </div>
  );
};

export default Counter;