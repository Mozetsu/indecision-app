import React from 'react';

export default class AddOption extends React.Component {
	state = { error: undefined };

	addOption = (e) => {
		e.preventDefault();

		const input = e.target.option.value.trim();
		const error = this.props.handleAddOption(input);

		this.setState(() => ({ error }));

		e.target.option.value = '';
	};
	render() {
		return (
			<div>
				{this.state.error && <p className="add-option-error">{this.state.error}</p>}
				<form className="add-option" onSubmit={this.addOption}>
					<input className="add-option__input" type="text" name="option" />
					<button className="button">Add</button>
				</form>
			</div>
		);
	}
}
