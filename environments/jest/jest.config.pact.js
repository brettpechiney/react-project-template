'use strict';

const config = require('./jest.config');

module.exports = {
  ...config,
  displayName: {
    name: 'PACT',
    color: 'yellow',
  },
  setupFiles: config.setupFiles.concat([
    '<rootDir>/environments/jest/pact-setup.js',
  ]),
  setupFilesAfterEnv: ['<rootDir>/environments/jest/pact-test-wrapper.js'],
  testEnvironment: 'node',
  testRegex: '\\.pact\\.js$',
};
