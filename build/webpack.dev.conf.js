'use strict';

const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackServeConfig = require('./local-server');

// Enable error overlay via Webpack Serve
Object.keys(baseWebpackConfig.entry).forEach(name => {
  baseWebpackConfig.entry[name] = ['webpack-serve-overlay'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  serve: webpackServeConfig,
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BABEL_ENV: 'development',
      NODE_ENV: 'development',
      WEBPACK_SERVE_OVERLAY_WS_URL: 'ws://localhost:8090',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new FriendlyErrorsPlugin(),
  ],
  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
  },
});
