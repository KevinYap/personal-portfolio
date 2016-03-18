var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/main.js',
	output: { 
		path: __dirname + '/dist', //path to where webpack will build your stuff
		// publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
		filename: 'bundle.js' 
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './src'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
	    // you can now require('file') instead of require('file.coffee')
	    extensions: ['', '.js', '.json', '.css'] 
	},
	debug: true,
	plugins: [HTMLWebpackPluginConfig]
};