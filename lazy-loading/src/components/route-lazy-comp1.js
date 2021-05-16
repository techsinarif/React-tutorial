import React from 'react';

function RouteLazyComp1 (){
  return (
    <div className="route-lazy-comp1">
      <h5>Component name: RouteLazyComp1</h5>
      <p style={{backgroundColor:'green'}}>I am lazy loaded component via routing</p>
    </div>
  )
}

export default RouteLazyComp1;