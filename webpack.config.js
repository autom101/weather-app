const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  watch: false,
  watchOptions: {
    ignored: "**/node_modules",
  },
  entry: {
    index: "./src/js/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
    }),
    new Dotenv({
      path: "./config.env",
      safe: true,
    }),
  ],
  output: {
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
