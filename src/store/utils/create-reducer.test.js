/**
 * @jest-environment node
 */

import createReducer from './create-reducer';

describe('createReducer', () => {
  it('returns a function', () => {
    const initialState = {};
    const handlers = {};

    const func = createReducer(initialState, handlers);

    expect(func).toBeInstanceOf(Function);
  });

  describe('returned function', () => {
    describe('no action type matched', () => {
      const initialState = { key: 'value' };
      const handlers = {};
      const action = { type: 'NO_MATCH' };

      it('returns an object', () => {
        const func = createReducer(initialState, handlers);

        const state = func(initialState, action);

        expect(state).toBeInstanceOf(Object);
      });

      it('returns the same state', () => {
        const func = createReducer(initialState, handlers);

        const state = func(initialState, action);

        expect(state).toMatchObject(initialState);
      });
    });

    describe('action type matched', () => {
      const initialState = { key: 'value' };
      const nextState = { key: 'new value' };
      const ACTION_TYPE = 'ACTION_TYPE';

      it('returns an object', () => {
        const handlers = { [ACTION_TYPE]: () => nextState };
        const action = { type: ACTION_TYPE };
        const func = createReducer(initialState, handlers);

        const state = func(initialState, action);

        expect(state).toBeInstanceOf(Object);
      });

      it('returns the next state', () => {
        const handlers = { [ACTION_TYPE]: () => nextState };
        const action = { type: ACTION_TYPE };
        const func = createReducer(initialState, handlers);

        const state = func(initialState, action);

        expect(state).toMatchObject(nextState);
      });
    });
  });
});
