'use strict';

const path = require('path');

module.exports = {
  projectRoot: path.resolve(__dirname, '..'),
  pactServerHost: '127.0.0.1',
  pactServerPort: 8991,
  dev: {
    assetsSubDirectory: 'static',
  },
  prod: {
    assetsSubDirectory: 'static',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
};
