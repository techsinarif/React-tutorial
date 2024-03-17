import React from 'react';

const FuncClick = () => {

  function handleClick(){
    console.log('functional component button clicked');
  }

  return (
    <div>
      <button onClick={handleClick}>Click me(functional component)</button>
    </div>
  );
};

export default FuncClick;