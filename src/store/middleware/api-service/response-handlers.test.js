import { handleFulfilled, handleRejected } from './response-handlers';

function create() {
  const res = 'expected res';
  const err = 'expected err';
  const action = {
    type: 'TEST_ACTION',
    meta: {
      async: true,
      blocking: true,
    },
  };
  const next = jest.fn();

  return {
    res,
    err,
    action,
    next,
  };
}

describe('handleFulfilled', () => {
  it("returns the 'res' parameter", () => {
    const { res, action, next } = create();

    const actual = handleFulfilled(res, action, next);

    expect(actual).toMatch(res);
  });

  it("calls the 'next' function", () => {
    const { res, action, next } = create();
    const expected = {
      type: `${action.type}_SUCCESS`,
      payload: res,
      meta: action.meta,
    };

    handleFulfilled(res, action, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(expected);
  });
});

describe('handleRejected', () => {
  it('returns a promise', () => {
    const { err, action, next } = create();

    const actual = handleRejected(err, action, next);

    expect(actual).toBeInstanceOf(Promise);
  });

  it("calls the 'next' function", () => {
    const { err, action, next } = create();
    const expected = {
      type: `${action.type}_FAILURE`,
      payload: err,
      meta: action.meta,
    };

    handleRejected(err, action, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(expected);
  });
});
