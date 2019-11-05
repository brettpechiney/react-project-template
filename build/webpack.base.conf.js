'use strict';

const environments = require('../environments');
const path = require('path');
const utils = require('./utils');

function resolve(dir) {
  return path.join(environments.projectRoot, dir);
}

module.exports = {
  entry: {
    app: ['./src/main.jsx'],
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
    extensions: ['.js', '.jsx', '.api.js', '.json', '.css', '.scss'],
    alias: {
      '@': resolve('src'),
      common: resolve('src/common'),
      store: resolve('src/store'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        include: [resolve('src'), resolve('__tests__')],
        loader: 'eslint-loader',
        options: {
          cache: true,
          formatter: require('eslint-friendly-formatter'),
        },
        test: /\.jsx?$/,
      },
      {
        test: /\.jsx?$/,
        include: [resolve('src')],
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: true,
              compact: true,
            },
          },
        ],
      },
      {
        test: /\.(js|mjs)$/,
        include: /(node_modules)/,
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        loader: 'babel-loader',
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
