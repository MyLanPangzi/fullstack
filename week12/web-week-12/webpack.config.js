const webpack = require('webpack');
const path = require('path');

module.exports = {

	devtool:"source-map",

	entry: {
    // list:'./src/list.js',
    // list2:'./src/list2.js',
    // list3:'./src/list3.js',
		// time: "./src/time.js",
		// event: "./src/event.js",
		// event2: "./src/customEvent.js",
		// list4: "./src/list4.js",
		// from: "./src/from.js",
    // tabs: "./src/tabs.js",
		// lr:"./src/app.js",
		// uilist:"./src/UIListApp.js",
		router:"./src/router/app.js"
  },

	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ["react",'env']
				}
			}
		]
	},

	devServer:{
		contentBase:'./dist'
	}
};
