const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { test: /\.css$/, loaders: "style-loader!css-loader" },
      { test: /\.html$/, loader: "html-loader" }
    ]
  },
  devtool: "#inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Derpstone",
      template: "./index.html"
    })
  ]
};
