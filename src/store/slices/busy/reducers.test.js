import busyReducer from './reducers';

const noCallInProgress = 0;
const oneCallInProgress = 1;
const twoCallsInProgress = 2;

const blocking = {
  type: 'TEST',
  meta: {
    async: true,
    blocking: true,
  },
};

const blockingCompleted = {
  type: 'TEST_SUCCESS',
  meta: {
    async: true,
    blocking: true,
  },
};

const blockingFailed = {
  type: 'TEST_FAILURE',
  meta: {
    async: true,
    blocking: true,
  },
};

const nonBlocking = {
  type: 'TEST',
  meta: {
    async: true,
    blocking: false,
  },
};

const nonBlockingCompleted = {
  type: 'TEST_SUCCESS',
  meta: {
    async: true,
    blocking: false,
  },
};

const nonBlockingFailed = {
  type: 'TEST_FAILURE',
  meta: {
    async: true,
    blocking: false,
  },
};

describe('busy reducer', () => {
  describe('initial action', () => {
    describe('on general action', () => {
      describe('no api call running', () => {
        const result = busyReducer(noCallInProgress, blocking);

        it('should increment the busy state', () => {
          expect(result).toEqual(1);
        });
      });

      describe('another api call running', () => {
        const result = busyReducer(oneCallInProgress, blocking);

        it('should increment the busy state', () => {
          expect(result).toEqual(2);
        });
      });
    });

    describe('on non blocking action', () => {
      describe('no api call running', () => {
        const result = busyReducer(noCallInProgress, nonBlocking);

        it('should not increment the busy state', () => {
          expect(result).toEqual(0);
        });
      });

      describe('another api call running', () => {
        const result = busyReducer(oneCallInProgress, nonBlocking);

        it('should not increment the busy state', () => {
          expect(result).toEqual(1);
        });
      });
    });
  });

  describe('completed action', () => {
    describe('on general action', () => {
      describe('no api call running', () => {
        const result = busyReducer(oneCallInProgress, blockingCompleted);

        it('should increment the busy state', () => {
          expect(result).toEqual(0);
        });
      });

      describe('another api call running', () => {
        const result = busyReducer(twoCallsInProgress, blockingCompleted);

        it('should increment the busy state', () => {
          expect(result).toEqual(1);
        });
      });
    });

    describe('on general blocking action', () => {
      describe('no api call running', () => {
        const result = busyReducer(noCallInProgress, nonBlockingCompleted);

        it('should not increment the busy state', () => {
          expect(result).toEqual(0);
        });
      });

      describe('another api call running', () => {
        const result = busyReducer(oneCallInProgress, nonBlockingCompleted);

        it('should not increment the busy state', () => {
          expect(result).toEqual(1);
        });
      });
    });
  });

  describe('failed action', () => {
    describe('on general action', () => {
      describe('no api call running', () => {
        const result = busyReducer(oneCallInProgress, blockingFailed);

        it('should increment the busy state', () => {
          expect(result).toEqual(0);
        });
      });

      describe('another api call running', () => {
        const result = busyReducer(twoCallsInProgress, blockingFailed);

        it('should increment the busy state', () => {
          expect(result).toEqual(1);
        });
      });
    });

    describe('on non blocking action', () => {
      describe('no api call running', () => {
        const result = busyReducer(noCallInProgress, nonBlockingFailed);

        it('should not increment the busy state', () => {
          expect(result).toEqual(0);
        });
      });

      describe('another api call running', () => {
        const result = busyReducer(oneCallInProgress, nonBlockingFailed);

        it('should not increment the busy state', () => {
          expect(result).toEqual(1);
        });
      });
    });
  });
});
