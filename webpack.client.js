const path = require("path");
merge = require("webpack-merge");
config = require("./webpack.config");

const clientConfig = {
	mode: "development",
	entry: "./src/client/index.js",
	output: {
		path: path.resolve("public"),
		filename: "bundle.js"
	}
};

module.exports = merge(config, clientConfig);
