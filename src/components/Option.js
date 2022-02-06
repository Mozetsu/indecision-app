import React from 'react';

const Option = ({ option, count, handleDeleteOption }) => (
	<div className="option">
		<p className="option__text">
			{count}. {option}
		</p>
		<button className="button button--link" onClick={() => handleDeleteOption(option)}>
			remove
		</button>
	</div>
);

export default Option;
