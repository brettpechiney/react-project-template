'use strict';

const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackServeConfig = require('./server.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  serve: webpackServeConfig,
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'React Project Template',
      template: 'index.html',
    }),
    new FriendlyErrorsPlugin(),
  ],
  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
  },
});
