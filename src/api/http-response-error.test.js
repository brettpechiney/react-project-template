// @flow
import HTTPResponseError from './http-response-error';

describe('HTTPResponseError', () => {
  // Arrange
  const REDIRECTED = false;
  const STATUS = 401;
  const STATUS_TEXT = 'Unauthorized';
  const TYPE = 'cors';
  const URL = 'test URL';
  const init: ResponseOptions = {
    status: STATUS,
    statusText: STATUS_TEXT,
  };
  const res = new Response(new Blob(), init);
  res.redirected = REDIRECTED;
  res.type = TYPE;
  res.url = URL;

  // Act
  const err = new HTTPResponseError(res);

  it('sets "redirected" class property', () => {
    // Assert
    expect(err.redirected).toBe(REDIRECTED);
  });

  it('sets "status" class property', () => {
    // Assert
    expect(err.status).toBe(STATUS);
  });

  it('sets "statusText" class property', () => {
    // Assert
    expect(err.statusText).toBe(STATUS_TEXT);
  });

  it('sets "type" class property', () => {
    // Assert
    expect(err.type).toBe(TYPE);
  });

  it('sets "url" class property', () => {
    // Assert
    expect(err.url).toBe(URL);
  });
});
