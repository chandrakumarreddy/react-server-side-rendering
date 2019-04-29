const path = require("path"),
	nodeExternals = require("webpack-node-externals");
merge = require("webpack-merge");
config = require("./webpack.config");

const serverConfig = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve("build"),
		filename: "bundle.js"
	},
	target: "node",
	externals: [nodeExternals()]
};

module.exports = merge(config, serverConfig);
