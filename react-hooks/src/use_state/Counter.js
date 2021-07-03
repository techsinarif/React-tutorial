import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me!</button>
      <p>Current value of count is {count}</p>
    </div>
  );
};

export default Counter;