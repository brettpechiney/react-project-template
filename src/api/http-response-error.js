// @flow
/**
 * @fileoverview An error thrown when the status code of an HTTP response
 * falls outside the bounds of 2xx.
 */

class HTTPResponseError extends Error {
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;

  constructor(res: Response, ...args: any[]) {
    super(...args);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HTTPResponseError);
    }

    this.name = 'HTTPResponseError';
    this.redirected = res.redirected;
    this.status = res.status;
    this.statusText = res.statusText;
    this.type = res.type;
    this.url = res.url;
  }
}

export default HTTPResponseError;
