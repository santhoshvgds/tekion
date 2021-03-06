const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        // loader: "file?name=[path][name].[ext]",
        include: path.join(__dirname, "src/assets/images"),
      },
      {
        test: /\.mp4$/,
        loader: "url-loader",
        // loader: "file?name=[path][name].[ext]",
        include: path.join(__dirname, "src/assets/video"),
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
