import React from 'react';

const Option = ({ option, handleDeleteOption }) => {
	return (
		<div style={{ padding: '10px 0' }}>
			<p style={{ display: 'inline', marginRight: '20px' }}>{option}</p>
			<button onClick={() => handleDeleteOption(option)}>remove</button>
		</div>
	);
};

export default Option;
