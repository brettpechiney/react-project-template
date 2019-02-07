import getAuthToken from './get-auth-token';

describe('getAuthToken', () => {
  it('returns null if query parameter not found', () => {
    expect(getAuthToken()).toBeNull();
  });

  it('returns jwt if query parameter is found', () => {
    const expected = 'test-value';
    jsdom.reconfigure({
      url: `http://localhost/?t=${expected}`,
    });
    const actual = getAuthToken();

    expect(actual).toMatch(expected);
  });
});
