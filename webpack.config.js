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
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.s?css$/,
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
