const { resolve } = require("path");

module.exports = {
  mode: "production",
  entry: "./assets/js/lib/main.js",
  output: {
    filename: "bundle.js",
    path: resolve(".", "assets", "js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
