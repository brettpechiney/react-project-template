// @flow
/**
 * @fileoverview Contains a custom React hook which invokes a service
 * method, optionally passing a body. The hook tracks and returns
 * request status (fetching, success, error), returning any response
 * data including response body or error information.
 */

import * as React from 'react';
import type { ServiceMethod } from './services/service';

opaque type ErrorValues = $Values<typeof ErrorsEnum>;
opaque type State = {
  +data: ?{},
  +isFetching: boolean,
  +error: ?ErrorValues,
};

/**
 * The types of errors that could be returned from the hook.
 */
export const ErrorsEnum = Object.freeze({
  NOT_FOUND: 'Not Found',
  UNAUTHORIZED: 'Unauthorized',
  INTERNAL: 'Internal',
  OTHER: 'Other',
});

// You have to do some really odd stuff to use a constant as a type:
// https://github.com/facebook/flow/issues/6527#issuecomment-400395008
const FETCHING: 'FETCHING' = 'FETCHING';
const SUCCESS: 'SUCCESS' = 'SUCCESS';
const ERROR: 'ERROR' = 'ERROR';
opaque type Action =
  | { type: typeof FETCHING }
  | { type: typeof SUCCESS, body: Object }
  | { type: typeof ERROR, body: ?ErrorValues };

const requestReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, data: null, isFetching: true, error: null };
    case SUCCESS:
      return { ...state, data: action.body, isFetching: false, error: null };
    case ERROR:
      return { ...state, data: null, isFetching: false, error: action.body };
    default:
      // TODO: enhance error message and log
      throw new Error('unexpected action type received');
  }
};

export default (
  method: ServiceMethod,
  payload?: {}
): { data: ?Object, isFetching: boolean, error: ?ErrorValues } => {
  const [state, dispatch] = React.useReducer(requestReducer, {
    data: null,
    isFetching: false,
    error: null,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCHING });
      try {
        const response = await method(payload);
        dispatch({ type: SUCCESS, body: response });
      } catch (e) {
        // TODO: return better error information.
        if (e.name === 'HTTPResponseError') {
          dispatch({ type: ERROR, body: e.statusText });
        } else {
          dispatch({ type: ERROR, body: ErrorsEnum.OTHER });
        }
      }
    };

    fetchData();
  }, [payload, method]);

  const { data, isFetching, error } = state;
  return { isFetching, data, error };
};
