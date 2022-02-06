import React from 'react';
import Option from './Option';

const Options = ({ handleDeleteOptions, handleDeleteOption, options }) => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your Options</h3>
			<button className="button button--link" onClick={handleDeleteOptions} disabled={options.length === 0}>
				Remove all
			</button>
		</div>
		{options.length === 0 && <p className="widget__message">Add an option to get started.</p>}
		{options.map((option, index) => {
			return <Option key={option} option={option} count={index + 1} handleDeleteOption={handleDeleteOption} />;
		})}
	</div>
);

export default Options;
