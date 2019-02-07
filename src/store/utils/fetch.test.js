import fetch from './fetch';

describe('fetch', () => {
  it('returns a Promise', () => {
    expect(fetch('test', 'GET')).toBeInstanceOf(Promise);
  });
});
