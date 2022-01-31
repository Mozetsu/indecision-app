'use strict';

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (!option) {
		return console.log('Option cannot be empty!');
	}

	app.options.push(option);
	e.target.elements.option.value = '';
	return renderApp();
};

var removeOptions = function removeOptions() {
	app.options.length = 0;
	return renderApp();
};

var makeDecision = function makeDecision() {
	var randomNumber = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNumber];
	alert(option);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle && React.createElement(
			'p',
			null,
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No options'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: makeDecision },
			'What should I do?'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: removeOptions },
			'Remove all'
		),
		app.options.length > 0 && React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: app.options.length + option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

renderApp();
