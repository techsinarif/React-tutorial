import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({firstName: '', lastName: ''});

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
      <hr />
      <input type="text" onChange={(e) => setPerson({...person, firstName: e.target.value})} placeholder="Enter your first name"/>
      <input type="text" onChange={(e) => setPerson({...person, lastName: e.target.value})} placeholder="Enter your last name"/>
      {JSON.stringify(person)}
      <p>firstName value is: {person.firstName}</p>
      <p>lastName value is: {person.lastName}</p>
    </div>
  );
};

export default Counter;