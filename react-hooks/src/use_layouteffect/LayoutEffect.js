import {useRef, useLayoutEffect} from 'react';

const LayoutEffect = () => {
	const txtContent = useRef(null);

	useLayoutEffect(() => {
		let now = performance.now();
		while(performance.now() - now < 100) {
			// do nothing
		}

		const element = txtContent.current;
		element.style.marginTop = '25%'
	}, [])

	return (
		<>
			<h1 ref={txtContent}>Techs'n Arif</h1>
		</>
	)
};

export default LayoutEffect;