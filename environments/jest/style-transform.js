/**
 * @fileoverview This is a custom Jest transformer turning style imports into empty objects.
 */
'use strict';

module.exports = {
  process() {
    return 'module.exports = {};';
  },

  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
