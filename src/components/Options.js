import React from 'react';
import Option from './Option';

const Options = ({ handleDeleteOptions, handleDeleteOption, options }) => {
	return (
		<div>
			{options.length === 0 && <p>Add an option to get started.</p>}
			<button onClick={handleDeleteOptions} disabled={options.length === 0}>
				Remove all
			</button>
			{options.map((option) => {
				return <Option key={option} option={option} handleDeleteOption={handleDeleteOption} />;
			})}
		</div>
	);
};

export default Options;
