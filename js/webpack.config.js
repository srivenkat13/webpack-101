const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style.loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins:[new HtmlWebpackPlugin()],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
