'use strict';

module.exports = {
  plugins: [
    require('autoprefixer')({ grid: true, autoprefixer: 'no-2009' }),
    require('postcss-flexbugs-fixes'),
  ],
};
