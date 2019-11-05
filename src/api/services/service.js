// @flow
/**
 * @fileoverview Contains base service class from which all service
 * classes are derived.
 */

import HTTPResponseError from '../http-response-error';

/**
 * The function signature common to all service methods.
 */
// TODO: leverage a base "request" and "response" types
export type ServiceMethod = (body?: {}) => Promise<any>;

const { NODE_ENV } = process.env;
const getToken = Symbol('getToken');
export default class Service {
  // $FlowFixMe ignore flow's complaints about computed property keys
  static [getToken](): string {
    // JWT retrieval logic goes here.
    return '';
  }

  static async request(url: string, method: string, body: any): Promise<any> {
    let scheme: string;
    let apiUrl: string;
    let jwt: string;
    if (NODE_ENV === 'test') {
      scheme = 'http';
      apiUrl = global.variables.apiUrl;
      jwt = 'testJwt';
    } else {
      scheme = 'https';
      apiUrl = window.variables.apiUrl;
      // $FlowFixMe flow does not yet support Symbol primitive
      jwt = this[getToken]();
    }
    // TODO: make sure this handles CSRF.
    const res: Response = await fetch(`${scheme}://${apiUrl}/api/${url}`, {
      method,
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: method !== 'GET' ? JSON.stringify(body) : null,
    });

    if (res.ok === true) {
      return await res.json();
    }

    throw new HTTPResponseError(res, `invalid response ${res.status}`);
  }
}
