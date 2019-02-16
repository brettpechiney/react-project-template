'use-strict';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');
global.variables = {
  apiUrl: 'http://localhost:8080',
  logRedux: false,
};
