class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['One', 'Two', 'Three', 'Four'];

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	pickAction() {
		console.log('picked');
	}
	render() {
		return (
			<div>
				<button onClick={this.pickAction}>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	removeAll() {
		console.log('remove all');
	}
	render() {
		return (
			<div>
				<button onClick={this.removeAll}>Remove all</button>
				{this.props.options.map((option) => {
					return <Option key={option} option={option} />;
				})}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <p>{this.props.option}</p>;
	}
}

class AddOption extends React.Component {
	addOption(e) {
		e.preventDefault();

		const input = e.target.option.value.trim();

		if (!input) {
			e.target.option.value = '';
			return console.log('Action cannot be empty!');
		}

		e.target.option.value = '';
		console.log(input);
	}
	render() {
		return (
			<form onSubmit={this.addOption}>
				<input type="text" name="option" />
				<button>Add</button>
			</form>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
