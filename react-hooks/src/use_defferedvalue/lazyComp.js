import React, { useEffect, useState } from "react";

const defaultList = [1, 2, 3, 4, 5];

const LazyComp = ({text}) => {
	const [list, setList] = useState(defaultList);
	const sizeOfList = 10000;
	const value = text;

	useEffect(() => {
		const data = [];
		for (let i = 0; i < sizeOfList; i++) { 
			data[i] = value; 
		} 
		setList(data);
	}, [value])

  return (
    <>
      {
        list.map((list) => { 
          return <div>List Item: {list}</div>; 
        })
      }
    </>
  )
};

export default React.memo(LazyComp);