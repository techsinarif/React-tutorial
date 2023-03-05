import React,{useEffect} from 'react';

const Factorial = (props) => {
  const {factorial, updateNumber} = props;

  useEffect(()=>{
    console.log('component re-renders');
  })

  return (
    <div>
      <p>Find the factorial of the given number</p>
      <input type="text" placeholder="Enter the number" onChange={updateNumber} /><br />
      <span>Factorial of the given number is {factorial}</span>
    </div>
  )
};

export default React.memo(Factorial);