import React, {useState} from 'react';
// import CompA from './CompA';
import CompB from './CompB';

const Cleanup = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <p>useEffect with cleanup</p>
      <button onClick={() => {setToggle(!toggle)}}>show/hide compA</button>
      {/* {toggle ? <CompA /> : null} Effect clean up on componentWillUnmount */}
      <CompB />
    </div>
  )
};

export default Cleanup;