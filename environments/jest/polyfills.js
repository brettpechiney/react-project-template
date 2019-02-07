/**
 * @fileoverview This file provides polyfills to Jest tests.
 */
'use strict';

global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};

global.sessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
