/**
 * @fileoverview Defines errors that the API Service middleware can throw.
 */

function InvalidRequestMethodError(type, method) {
  this.name = 'InvalidRequestMethodError';
  this.message =
    `Invalid request method '${method}' specified for async action ${type}.` +
    ' Only POST, GET, PUT, PATCH, and DELETE should be dispatched through Redux.';
}
InvalidRequestMethodError.prototype = Error.prototype;

function PathNotSpecifiedError(type) {
  this.name = 'PathNotSpecifiedError';
  this.message = `'path' not specified for async action ${type}`;
}
PathNotSpecifiedError.prototype = Error.prototype;

function RequestMethodNotSpecifiedError(type) {
  this.name = 'RequestMethodNotSpecifiedError';
  this.message = `'method' not specified for async action ${type}`;
}
RequestMethodNotSpecifiedError.prototype = Error.prototype;

export { InvalidRequestMethodError, PathNotSpecifiedError, RequestMethodNotSpecifiedError };
