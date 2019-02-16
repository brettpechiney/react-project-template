import request, { parseStatus } from './request';

function setup() {
  const url = 'www.vertafore.com';
  const method = 'GET';
  const response = {
    data: 'test-data',
  };

  return {
    url,
    method,
    response,
  };
}

const { url, method, response } = setup();

describe('request', () => {
  it('should return data on success', async () => {
    expect.assertions(1);
    fetch.mockResponseOnce(JSON.stringify(response));

    const actual = await request(url, method);

    expect(actual).toEqual(response);
  });
});

describe('parseStatus', () => {
  it('returns response when status in 200 range', async () => {
    expect.assertions(1);

    const actual = await parseStatus(200, Promise.resolve(response));

    expect(actual).toEqual(response);
  });

  it('throws an error when status not in 200 range', async () => {
    const errResponse = { statusText: 'bad-request' };

    await expect(
      parseStatus(300, Promise.resolve(errResponse))
    ).rejects.toThrow(errResponse.statusText);
  });
});
