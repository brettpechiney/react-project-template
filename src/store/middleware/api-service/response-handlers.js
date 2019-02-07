/**
 * @fileoverview Defines the functions that handle the success and failure cases
 * of a Promise returned by an HTTP request.
 */

function handleFulfilled(res, action, next) {
  next({
    type: `${action.type}_SUCCESS`,
    payload: res,
    meta: action.meta,
  });

  return res;
}

function handleRejected(err, action, next) {
  next({
    type: `${action.type}_FAILURE`,
    payload: err,
    meta: action.meta,
  });

  return Promise.reject(err);
}

export { handleFulfilled, handleRejected };
