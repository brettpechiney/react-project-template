'use strict';

const path = require('path');
const environments = require('../environments');

exports.assetsPath = function(_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? environments.prod.assetsSubDirectory
      : environments.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};
