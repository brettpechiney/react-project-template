import apiService from './api-service';
import {
  InvalidRequestMethodError,
  PathNotSpecifiedError,
  RequestMethodNotSpecifiedError,
} from './errors';

function create() {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = action => apiService(store)(next)(action);

  return {
    store,
    next,
    invoke,
  };
}

describe('apiService', () => {
  it('returns a Promise', () => {
    const { invoke } = create();
    const action = {
      type: 'TEST',
      meta: {
        async: true,
        blocking: true,
        path: '/test',
        method: 'GET',
      },
    };

    const actual = invoke(action);

    expect(actual).toBeInstanceOf(Promise);
  });

  it("calls the 'next' function when no meta object is on action", () => {
    const { next, invoke } = create();
    const action = { type: 'TEST' };

    invoke(action);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(action);
  });

  it("calls the 'next' function when no meta.async property is on action", () => {
    const { next, invoke } = create();
    const action = {
      type: 'TEST',
      meta: {},
    };

    invoke(action);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(action);
  });

  it("throws PathNotSpecifiedError when 'path' property is not set", () => {
    const { invoke } = create();
    const action = {
      type: 'TEST',
      meta: {
        async: true,
        blocking: true,
        method: 'GET',
      },
    };

    expect(() => invoke(action)).toThrow(PathNotSpecifiedError);
  });

  it("throws RequestMethodNotSpecifiedError when 'method' property is not set", () => {
    const { invoke } = create();
    const action = {
      type: 'TEST',
      meta: {
        async: true,
        blocking: true,
        path: '/test',
      },
    };

    expect(() => invoke(action)).toThrow(RequestMethodNotSpecifiedError);
  });

  it("throws InvalidRequestMethodError when 'method' property is invalid", () => {
    const { invoke } = create();
    const action = {
      type: 'TEST',
      meta: {
        async: true,
        blocking: true,
        path: '/test',
        method: 'TRACE',
      },
    };

    expect(() => invoke(action)).toThrow(InvalidRequestMethodError);
  });
});
