'use strict';

const baseWebpackConfig = require('./webpack.base.conf');
const environments = require('../environments');
const merge = require('webpack-merge');
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BABEL_ENV: 'production',
      NODE_ENV: 'production',
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    // Extract CSS into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[chunkhash].min.css'),
    }),
    // Compress extracted CSS
    new OptimizeCssAssetsPlugin(),
    // Generate dist index.html with correct asset hash for caching
    new HtmlWebpackPlugin({
      filename: environments.prod.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: 'dependency',
    }),
    // Keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // Merge similar chunks if the size reduction is adequate
    new webpack.optimize.AggressiveMergingPlugin(),
    // Copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: environments.prod.assetsSubDirectory,
        ignore: ['.*'],
      },
    ]),
  ],
  optimization: {
    // Any required modules inside node_modules are extracted to vendor
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    // Extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    runtimeChunk: {
      name: 'manifest',
    },
  },
  output: {
    path: environments.prod.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].min.js'),
    sourceMapFilename: utils.assetsPath('js/[name].[chunkhash].min.map'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].min.js'),
  },
});

if (environments.prod.bundleAnalyzerReport) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
