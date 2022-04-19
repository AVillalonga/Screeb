const path = require("path");

module.exports = {
  entry: "../release/commonjs/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../release/bundle"),
  },
};
