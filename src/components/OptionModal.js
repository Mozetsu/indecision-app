import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
	<Modal
		isOpen={!!selectedOption}
		onRequestClose={handleClearSelectedOption}
		contentLabel="Selected option"
		closeTimeoutMS={100}
		className="modal"
	>
		<h3 className="modal__title">Selected Option</h3>
		{selectedOption && <p className="modal__body">{selectedOption}</p>}
		<button className="button" onClick={handleClearSelectedOption}>
			Close
		</button>
	</Modal>
);

export default OptionModal;
