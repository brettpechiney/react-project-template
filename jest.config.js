'use strict';

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,mjs}',
    '!**/index*.js',
    '!<rootDir>/src/main.jsx',
    '!<rootDir>/src/assets',
    '!<rootDir>/src/store/configure-store.js',
    '!<rootDir>/src/store/middleware/api-service/errors.js',
    '!<rootDir>/src/store/slices/root*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.(css|less|scss|style)$': 'identity-obj-proxy',
    '^@[/](.+)': '<rootDir>/src/$1',
    '^common[/](.+)': '<rootDir>/src/components/common/$1',
  },
  setupFiles: [
    '<rootDir>/environments/jest/polyfills.js',
    '<rootDir>/environments/jest/setup-tests.js',
    'jest-prop-type-error',
  ],
  testEnvironment: 'jest-environment-jsdom-global',
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(sa|sc|c)ss$': '<rootDir>/environments/jest/style-transform.js',
    '^.+\\.(png|jpg|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/environments/jest/file-transform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};
