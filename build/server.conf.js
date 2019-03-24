'use strict';

const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const webpackServeWaitpage = require('webpack-serve-waitpage');

module.exports = {
  add: (app, middleware, options) => {
    app.use(convert(history()));
    app.use(webpackServeWaitpage(options, { theme: 'dark' }));
  },
  devMiddleware: {
    logLevel: 'warn',
  },
  hotClient: {
    logLevel: 'warn',
    port: 8090,
  },
  open: true,
  port: 3000,
};
