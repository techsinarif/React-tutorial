// import {useState, useEffect} from 'react';
import withData from "./withData";
const url = "https://jsonplaceholder.typicode.com/posts";

const FetchPostData = (props) => {
	const {data, name} = props;

	return (
		<>
			<p>Post Data</p>
			<p>{name}</p>
			{
				data?.map((item, index) => {
					return <div key={index}>{item.title}</div>
				})
			}
		</>
	)
};

export default withData(FetchPostData, url);