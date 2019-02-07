'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
  ],

  globals: {
    jsdom: false,
  },

  overrides: [
    {
      files: ['scripts/**/*.js'],
      rules: {
        'no-console': OFF,
        'no-shadow': OFF,
        'jest/no-jest-import': OFF,
      },
    },
    {
      files: ['*.test.{js,jsx}'],
      rules: {
        'no-shadow': OFF,
      },
    },
    {
      files: ['environments/**/*.js'],
      rules: {
        'no-dupe-keys': OFF,
      },
    },
  ],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['jest', 'jsx-a11y', 'flowtype', 'react', 'import', 'prettier'],

  // Check if imports resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
    react: {
      version: 'detect',
    },
  },

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  // We're stricter than the default config, mostly.
  rules: {
    'comma-dangle': [ERROR, 'always-multiline'],
    'dot-location': [ERROR, 'property'],
    eqeqeq: [ERROR, 'allow-null'],
    'import/dynamic-import-chunkname': ERROR,
    'import/no-unresolved': ERROR,
    indent: OFF,
    'linebreak-style': OFF,
    'no-console': WARN,
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,
    'space-before-function-paren': [ERROR, 'never'],

    // React and JSX
    'react/jsx-boolean-value': [ERROR, 'always'],
    'react/jsx-no-undef': ERROR,
  },
};
