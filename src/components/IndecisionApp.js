import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Option';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: [],
		};
	}

	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem('options'));
			if (!options) return;
			this.setState(() => ({ options }));
		} catch (error) {}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length === this.state.options.length) {
			// No change to options array
			return;
		}

		const data = JSON.stringify(this.state.options);
		return localStorage.setItem('options', data);
	}

	handlePick() {
		const randomIndex = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomIndex];
		return console.log(option);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Action cannot be empty!';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'Option already exists!';
		}

		this.setState((prevState) => ({ options: [...prevState.options, option] }));
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => option !== optionToRemove),
		}));
	}

	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}
