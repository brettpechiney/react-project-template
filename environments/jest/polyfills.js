'use strict';

global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};

global.sessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

if (typeof window !== 'undefined') {
  require('whatwg-fetch');
}
