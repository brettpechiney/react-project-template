import * as utils from './utils';

const busyReducer = (state = 0, action) => {
  let retVal;
  if (utils.actionShouldBlock(action.meta)) {
    retVal = state;
  } else if (utils.actionFinished(action.type)) {
    retVal = state - 1;
  } else {
    retVal = state + 1;
  }

  return retVal;
};

export default busyReducer;
