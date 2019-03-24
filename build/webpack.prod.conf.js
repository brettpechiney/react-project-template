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
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'source-map',
  mode: 'production',
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
    // Extract CSS into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[chunkhash].min.css'),
    }),
    // Compress extracted CSS
    new OptimizeCssAssetsPlugin(),
    // Generate dist index.html with correct asset hash for caching
    new HtmlWebpackPlugin({
      filename: environments.prod.index,
      hash: true,
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURL: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      title: 'React Project Template',
      template: 'index.html',
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
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          compress: {
            // Be ready to change this if things start breaking:
            // https://github.com/facebook/create-react-app/issues/2376
            comparisons: true,
            // Linting rules should prevent this from happening in the project
            // but it doesn't hurt to provide an additional redundancy.
            drop_console: true,
            ecma: 5,
            // Keep an eye on this. There was an issue but it seems to have been fixed:
            // issue: https://github.com/terser-js/terser/issues/120
            // fix: https://github.com/terser-js/terser/pull/144
            inline: 3,
            unsafe_Function: true,
          },
          output: {
            ascii_only: true,
            comments: false,
            ecma: 5,
            indent_level: 4,
          },
        },
      }),
    ],
    // Any required modules inside node_modules are extracted to vendor
    splitChunks: {
      chunks: 'all',
    },
    // Keep the runtime chunk separated to enable long term caching.
    runtimeChunk: true,
  },
  output: {
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].min.js'),
    filename: utils.assetsPath('js/[name].[chunkhash].min.js'),
    path: environments.prod.assetsRoot,
    sourceMapFilename: utils.assetsPath('js/[name].[chunkhash].min.map'),
  },
});

if (environments.prod.bundleAnalyzerReport) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(webpackConfig);
