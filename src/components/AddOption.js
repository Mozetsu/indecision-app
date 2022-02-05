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
				<form onSubmit={this.addOption}>
					<input type="text" name="option" />
					<button>Add</button>
				</form>
				{this.state.error && <p>{this.state.error}</p>}
			</div>
		);
	}
}
