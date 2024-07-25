import {useState, forwardRef, useImperativeHandle} from 'react';

const Modal = (props, ref) => {
  const [modalState, setModalState] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			openModal() {
				setModalState(true);
			}
		}
	},[]);

	if(!modalState) return null;
	
	return (
		<div className='modal'>
			<p>popup from child component</p>
			<button onClick={() => setModalState(false)}>close</button>
		</div>
	)
};

export default forwardRef(Modal);