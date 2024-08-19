// import {useState, useEffect} from 'react';
import withData from "./withData";
const url = "https://jsonplaceholder.typicode.com/todos";

const FetchToDoData = (props) => {
	const {data, name} = props;

	return (
		<>
			<p>Todo items</p>
			<p>{name}</p>
			{
				data?.map((item, index) => {
					return <div key={index}>{item.title}</div>
				})
			}
		</>
	)
};

export default withData(FetchToDoData, url);