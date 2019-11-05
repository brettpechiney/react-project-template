// @flow
import Service from './service';
import fetchMock from 'fetch-mock';
import HTTPResponseError from '../http-response-error';

describe('Service', () => {
  describe('request', () => {
    afterEach(() => {
      fetchMock.reset();
    });

    const mockEndpoint = 'test';

    // fetch-mock uses node-fetch constructors by default, so we
    // override with the fetch library we use.
    const fetch = require('whatwg-fetch');
    fetchMock.config = Object.assign(fetchMock.config, {
      Response: fetch.Response,
    });
    it('calls "fetch" once', async () => {
      // Arrange
      const init = {
        status: 200,
        statusText: 'OK',
      };

      const testBlob = new Blob([JSON.stringify({ body: 'test' })], {
        type: 'application/json',
      });
      const mockResponse = new Response(testBlob, init);
      fetchMock.mock('*', mockResponse);

      // Act
      await Service.request(mockEndpoint, 'GET');

      // Assert
      expect(fetchMock.calls().length).toBe(1);
    });

    it('returns response JSON on success', async () => {
      // Arrange
      const init = {
        status: 200,
        statusText: 'OK',
      };
      const body = 'test body';
      const testBlob = new Blob([JSON.stringify({ body })], {
        type: 'application/json',
      });
      const mockResponse = new Response(testBlob, init);
      fetchMock.mock('*', mockResponse);

      // Act
      const actual: Response = await Service.request(mockEndpoint, 'GET');

      // Assert
      expect(actual.body).toBe(body);
    });

    it('throws HTTPResponseError on failure', async () => {
      expect.assertions(1);

      // Arrange
      const init = {
        status: 403,
        statusText: 'Unauthorized',
        ok: false,
      };
      const mockResponse = new Response(new Blob(), init);
      fetchMock.mock('*', mockResponse);

      // Act/Assert

      try {
        // Act
        await Service.request(mockEndpoint, 'GET');
      } catch (e) {
        // Assert
        // eslint-disable-next-line jest/no-try-expect
        expect(e).toBeInstanceOf(HTTPResponseError);
      }
    });
  });
});
