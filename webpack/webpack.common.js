const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		app: [
		"babel-polyfill",//This is required for "async await" functionality
		"./src/app.js"
	]},
	output: {
		path: path.resolve(__dirname, "../build"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [{
			/* Test Value Explanation
				\. = This takes the . symbol literal.  This is an escape sequence
				js = The type of files to use
				$ = The end of the file name.  In this case the end would be .js
			 */
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				//stage-0 is required for using ES7 "async await" functionality
				presets: ["env", "stage-0"]
			}
		}]
	},
	plugins: [
		//Used to include html files in the output to detect changes during dev server runtime
		new HtmlWebpackPlugin()
	]
}