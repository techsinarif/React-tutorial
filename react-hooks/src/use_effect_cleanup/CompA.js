import React, {useEffect} from 'react';

const CompA = () => {
  
  useEffect(() => {
    // effect goes here
    console.log('Effect goes here');
    const timerId = setInterval(() => {
      console.log('API call executed');
    }, 2000);

    return () => {
      // Clean up goes here.
      console.log('Cleanup goes here');
      clearInterval(timerId);
    }
  }, []);

  return (
    <div>
      <p>Component A</p>
      <hr />
    </div>
  )
};

export default CompA;