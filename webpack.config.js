const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.scss$/,
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 8080,
		webSocketServer: 'ws',
	},
};
