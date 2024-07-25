import {useRef} from 'react';
import Modal from './Modal';
import './modal.css';

const DemoApp = () => {

	const modalRef = useRef(null)

	const handleOpenModal = () => {
		modalRef.current.openModal();
	}

  return (
		<div>
			<p>Parent component</p>
			<Modal ref={modalRef}/>
			<button onClick={handleOpenModal}>open</button>
		</div>
	)
};

export default DemoApp;