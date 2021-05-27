import React from 'react';

const Userone = (props) => {
  console.log(props);
  return (
    <div>
      <h4>Welcome Mr.{props.firstName} {props.lastName}</h4>
      {props.children}
    </div>
  )
}

export default Userone;