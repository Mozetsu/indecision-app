import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
	<Modal isOpen={!!selectedOption} contentLabel="Selected option">
		<h3>Selected Option</h3>
		{selectedOption && <p>{selectedOption}</p>}
		<button onClick={handleClearSelectedOption}>Close</button>
	</Modal>
);

export default OptionModal;
