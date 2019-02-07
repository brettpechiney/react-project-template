/**
 * Creates reducers that are expressed as an object mapping from action types to handlers.
 * @param   {object} initialState   The initial state of the store slice
 * @param   {object} handlers       An object mapping action types to update logic
 *
 * @returns {function}              A function accepting state and action as parameters
 */
function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const hasActionProp = Object.prototype.hasOwnProperty.call(handlers, action.type);
    if (hasActionProp) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}

export default createReducer;
