'use strict';

const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackServeConfig = require('./local-server');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  serve: webpackServeConfig,
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
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
