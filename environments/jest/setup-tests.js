/**
 * @fileoverview This file contains code that is run before each Jest test.
 */
'use-strict';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

global.variables = {
  apiUrl: 'http://localhost:8080',
  logRedux: false,
};
