import {useState, useEffect} from 'react';

const withData = (OriginalComponent, dataSrc) => {
	return function(props){
		const [data, setData] = useState(null);

		useEffect(() => {
			const apiUrl = dataSrc;
			fetch(apiUrl)
			.then(response => response.json())
			.then(data => setData(data));
		}, []);

		return (
			<OriginalComponent data={data} {...props} />
		)
	}
};

export default withData;