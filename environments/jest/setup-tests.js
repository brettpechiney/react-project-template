'use-strict';

const { pactServerHost, pactServerPort } = require('../');

const Adapter = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');
Enzyme.configure({ adapter: new Adapter() });

global.variables = {
  apiUrl: `${pactServerHost}:${pactServerPort}`,
  logRedux: false,
};
