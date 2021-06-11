import React from 'react';

const Userone = ({firstName, lastName, children}) => {
  // console.log(props);
  // const {firstName, lastName, children} = props;
  return (
    <div>
      <h4>Welcome Mr.{firstName} {lastName}</h4>
      {children}
    </div>
  )
}

export default Userone;