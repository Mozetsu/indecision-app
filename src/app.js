const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: [],
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (!option) {
		return console.log('Option cannot be empty!');
	}

	app.options.push(option);
	e.target.elements.option.value = '';
	return renderApp();
};

const removeOptions = () => {
	app.options.length = 0;
	return renderApp();
};

const makeDecision = () => {
	const randomNumber = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNumber];
	alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<button disabled={app.options.length === 0} onClick={makeDecision}>
				What should I do?
			</button>
			<button disabled={app.options.length === 0} onClick={removeOptions}>
				Remove all
			</button>
			{app.options.length > 0 && (
				<ol>
					{app.options.map((option) => {
						return <li key={app.options.length + option}>{option}</li>;
					})}
				</ol>
			)}
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

renderApp();
