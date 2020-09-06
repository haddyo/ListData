const common = require("./webpack.common.js");
const Dotenv = require("dotenv").config();
const merge = require("webpack-merge");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  devServer: {
    filename: "index_bundle.js",
    port: process.env.CLIENT_PORT,
    historyApiFallback: true,
    proxy: {
      "/api": process.env.SERVER_URL
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|woff2|woff|ttf)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    // new Dotenv(),
    new CopyWebpackPlugin([{ from: "src/assets/images", to: "images" }])
  ]
});
