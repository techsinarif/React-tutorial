import React, {useState, useMemo} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({firstName: '', lastName: ''});
  const [number, setNumber] = useState(1);

  const increaseFive = () => {
    for(let i=0; i < 5; i++){
      setCount(prevState => prevState + 1);
    }
  }

  const factorialOf = (n) => {
    console.log('inside factorialOf method');
    let result = 1;
    if(n <= 1){
      return result;
    }else{
      for(let i = n; i >= 1; i--){
        result = result * i;
      }
      return result;
    }
  }

  // const factorial = factorialOf(number);
  const factorial = useMemo(() => factorialOf(number), [number]);

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
      <hr />
      <p>Find the factorial of the given number</p>
      <input type="text" placeholder="Enter the number" onChange={(e) => {setNumber(e.target.value)}} /><br />
      <span>Factorial of the given number is {factorial}</span>
    </div>
  );
};

export default Counter;

