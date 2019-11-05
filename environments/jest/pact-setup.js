'use strict';

const { pactServerHost, pactServerPort } = require('../');
const { Pact } = require('@pact-foundation/pact');
const path = require('path');
const { projectRoot } = require('../');

function resolve(dir) {
  return path.join(projectRoot, dir);
}

global.provider = new Pact({
  host: pactServerHost,
  port: pactServerPort,
  log: resolve('pact-mockserver-integration.log'),
  dir: resolve('pacts'),
  spec: 2,
  pactfileWriteMode: 'update',
  consumer: 'InvoiceBuilderWebApp',
  provider: 'InvoiceService',
});
