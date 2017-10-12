const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "DerpStone",
      minify: {
        collapseWhitespace: true
      },
      template: "./index.html"
    })
  ]
};
