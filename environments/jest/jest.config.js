'use strict';

const environments = require('../');

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,mjs}',
    '!**/index.js',
    '!**/*.api.js',
    '!<rootDir>/src/main.jsx',
    '!<rootDir>/src/common/contexts',
    '!<rootDir>/src/store/configure-store.js',
    '!<rootDir>/src/store/middleware/api-service/errors.js',
    '!<rootDir>/src/store/slices/root*.js',
    '!<rootDir>/src/store/slices/busy/*',
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  errorOnDeprecated: true,
  moduleFileExtensions: ['js', 'json', 'jsx', 'api.js', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|style)$': 'identity-obj-proxy',
    '^@[/](.+)': '<rootDir>/src/$1',
    '^common[/](.+)': '<rootDir>/src/common/$1',
  },
  rootDir: environments.projectRoot,
  setupFiles: [
    '<rootDir>/environments/jest/polyfills.js',
    '<rootDir>/environments/jest/setup-tests.js',
  ],
  testEnvironment: 'jsdom',
  testRegex: '\\.(test)\\.jsx?$',
  testPathIgnorePatterns: ['<rootDir>/scripts', '<rootDir>/environments'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(sa|sc|c)ss$': '<rootDir>/environments/jest/style-transform.js',
    '^.+\\.(png|jpg|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/environments/jest/file-transform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};
