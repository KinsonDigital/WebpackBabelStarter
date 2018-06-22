const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",
	devtool: "eval",
	devServer: {
		//Used to include html files in the output to detect changes during dev server runtime
		watchContentBase: true,
		port: 4000
	}
});