'use strict';

const environments = require('../environments');
const path = require('path');
const utils = require('./utils');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/main.jsx'],
  },
  externals: {
    variables: 'variables',
  },
  output: {
    pathinfo: true,
    path: environments.prod.assetsRoot,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    alias: {
      '@': resolve('src'),
      common: resolve('src/components/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('__tests__')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.jsx?$/,
        include: [resolve('src')],
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-2', 'react'],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
};
