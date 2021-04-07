const webpack = require("webpack");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const config = {
	entry: "./src/index.js",

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},

  mode: "development",

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
        test: /\.css$/,
        loader: "style-loader",
			},
			{
        test: /\.css$/,
        loader: "css-loader",
			},
			{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".css"],
	},
	plugins: [new Dotenv()],
};

module.exports = config;
