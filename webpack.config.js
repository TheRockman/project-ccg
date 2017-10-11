const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./dist/app.bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
