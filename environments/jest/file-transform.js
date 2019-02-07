/**
 * @fileoverview This is a custom Jest transformer turning file imports into filenames.
 */
'use strict';

const path = require('path');

module.exports = {
  process(_, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
