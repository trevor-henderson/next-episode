require('@babel/polyfill');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      outputPath: path.join(__dirname, outputDirectory),
    }),
    new HtmlWebpackPlugin({
      template: 'static/index.html',
    }),
  ],
};
