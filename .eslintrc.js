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
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended',
    'prettier/flowtype',
    'prettier/react',
  ],

  globals: {
    jsdom: false,
    provider: 'readonly',
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

  plugins: [
    'jest',
    'jsx-a11y',
    'react',
    'import',
    'prettier',
    'react-hooks',
    'flowtype',
  ],

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

  root: true,

  rules: {
    eqeqeq: [ERROR, 'allow-null'],
    'import/dynamic-import-chunkname': ERROR,
    'import/no-unresolved': ERROR,
    indent: OFF,
    'linebreak-style': OFF,
    'no-console': WARN,
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,

    // React and JSX
    'react/jsx-boolean-value': [ERROR, 'always'],
    'react/jsx-no-undef': ERROR,

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
