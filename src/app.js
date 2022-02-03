class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: ['One', 'Two', 'Three'],
		};
	}

	componentDidMount() {
		console.log('Mounted');
	}

	componentDidUpdate() {
		console.log('Updated');
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
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
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

const Header = ({ title, subtitle }) => {
	return (
		<div>
			<h1>{title}</h1>
			{subtitle && <h2>{subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision',
};

const Action = ({ handlePick, hasOptions }) => {
	return (
		<div>
			<button onClick={handlePick} disabled={!hasOptions}>
				What should I do?
			</button>
		</div>
	);
};

const Options = ({ handleDeleteOptions, handleDeleteOption, options }) => {
	return (
		<div>
			<button onClick={handleDeleteOptions}>Remove all</button>
			{options.map((option) => {
				return <Option key={option} option={option} handleDeleteOption={handleDeleteOption} />;
			})}
		</div>
	);
};

const Option = ({ option, handleDeleteOption }) => {
	return (
		<div style={{ padding: '10px 0' }}>
			<p style={{ display: 'inline', marginRight: '20px' }}>{option}</p>
			<button onClick={() => handleDeleteOption(option)}>remove</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.addOption = this.addOption.bind(this);
		this.state = {
			error: undefined,
		};
	}
	addOption(e) {
		e.preventDefault();

		const input = e.target.option.value.trim();
		const error = this.props.handleAddOption(input);

		this.setState(() => ({ error }));

		e.target.option.value = '';
	}
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
