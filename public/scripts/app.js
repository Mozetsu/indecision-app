'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		_this.state = {
			options: ['One', 'Two', 'Three']
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('Mounted');
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			console.log('Updated');
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randomIndex = Math.floor(Math.random() * this.state.options.length);
			var option = this.state.options[randomIndex];
			return console.log(option);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				return 'Action cannot be empty!';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'Option already exists!';
			}

			this.setState(function (prevState) {
				return { options: [].concat(_toConsumableArray(prevState.options), [option]) };
			});
		}
	}, {
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToRemove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return option !== optionToRemove;
					})
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var subtitle = 'Put your life in the hands of a computer';

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions,
					handleDeleteOption: this.handleDeleteOption
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function Header(_ref) {
	var title = _ref.title,
	    subtitle = _ref.subtitle;

	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			title
		),
		subtitle && React.createElement(
			'h2',
			null,
			subtitle
		)
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

var Action = function Action(_ref2) {
	var handlePick = _ref2.handlePick,
	    hasOptions = _ref2.hasOptions;

	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: handlePick, disabled: !hasOptions },
			'What should I do?'
		)
	);
};

var Options = function Options(_ref3) {
	var handleDeleteOptions = _ref3.handleDeleteOptions,
	    handleDeleteOption = _ref3.handleDeleteOption,
	    options = _ref3.options;

	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: handleDeleteOptions },
			'Remove all'
		),
		options.map(function (option) {
			return React.createElement(Option, { key: option, option: option, handleDeleteOption: handleDeleteOption });
		})
	);
};

var Option = function Option(_ref4) {
	var option = _ref4.option,
	    handleDeleteOption = _ref4.handleDeleteOption;

	return React.createElement(
		'div',
		{ style: { padding: '10px 0' } },
		React.createElement(
			'p',
			{ style: { display: 'inline', marginRight: '20px' } },
			option
		),
		React.createElement(
			'button',
			{ onClick: function onClick() {
					return handleDeleteOption(option);
				} },
			'remove'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.addOption = _this2.addOption.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'addOption',
		value: function addOption(e) {
			e.preventDefault();

			var input = e.target.option.value.trim();
			var error = this.props.handleAddOption(input);

			this.setState(function () {
				return { error: error };
			});

			e.target.option.value = '';
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: this.addOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add'
					)
				),
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
