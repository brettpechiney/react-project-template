'use strict';

const environments = require('../environments');
const path = require('path');
const utils = require('./utils');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', './src/main.jsx'],
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
      store: resolve('src/store'),
      'react-dom': '@hot-loader/react-dom',
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
        exclude: /(node_modules|bower_components)/,
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
        include: /(node_modules|bower_components)/,
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
