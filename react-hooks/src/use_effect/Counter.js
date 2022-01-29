import React, {useState, useEffect} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Initial message');

  useEffect(() => {
    console.log('component mounted / updated');
    console.log(msg);
    console.log('count is increased to', count);
  },[count,msg]);

  return (
    <div>
      <button onClick={()=>{setCount(count + 1)}}>Increase count</button>
      <p>The count value is: {count}</p>
      <button onClick={() => {setMsg('msg updated on click event')}}>update message</button>
    </div>
  )
};

export default Counter;