import { handleFulfilled, handleRejected } from './response-handlers';

function setup() {
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

const { res, err, action, next } = setup();
afterEach(() => next.mockReset());

describe('handleFulfilled', () => {
  it("returns the 'res' parameter", () => {
    const actual = handleFulfilled(res, action, next);

    expect(actual).toMatch(res);
  });

  it("calls the 'next' function", () => {
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
  it('returns a promise', async () => {
    await expect(handleRejected(err, action, next)).rejects.toEqual(err);
  });

  it("calls the 'next' function", async () => {
    expect.assertions(1);
    try {
      await handleRejected(err, action, next);
    } catch (e) {
      expect(next).toHaveBeenCalledTimes(1);
    }
  });
});
