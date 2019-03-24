/**
 * @fileoverview Defines the API Service Redux middleware responsible for handling
 * dispatched actions that require network communication.
 */

import { request } from '@/api';
import { handleFulfilled, handleRejected } from './response-handlers';
import {
  InvalidRequestMethodError,
  PathNotSpecifiedError,
  RequestMethodNotSpecifiedError,
} from './errors';

/**
 * Handles dispatched actions marked as 'async' by first making an HTTP request
 * based on meta information provided in the action object, then handling the
 * response based on the status of the returned Promise. If the Promise is fulfilled,
 * a '_SUCCESS' action is dispatched and the response object is returned. If the
 * Promise is rejected, the error object is returned.
 */
const apiService = () => next => action => {
  const result = next(action);
  if (!action.meta || !action.meta.async) {
    return result;
  }

  const validMethods = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];
  const { path, method, body } = action.meta;
  if (!path) {
    throw new PathNotSpecifiedError(action.type);
  } else if (!method) {
    throw new RequestMethodNotSpecifiedError(action.type);
  } else if (!validMethods.includes(method)) {
    throw new InvalidRequestMethodError(action.type, method);
  }

  return request(path, method, body).then(
    res => handleFulfilled(res, action, next),
    err => handleRejected(err, action, next)
  );
};

export default apiService;
