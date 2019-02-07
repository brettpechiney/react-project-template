import { combineReducers } from 'redux';
import busyReducer from './busy';

export default combineReducers({
  busy: busyReducer,
});
