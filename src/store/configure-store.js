import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './slices/root-reducer';

function configureStore(preloadedState) {
  const middleware = [thunk];

  const { logRedux = false } = window.variables;
  if (logRedux) {
    middleware.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middleware);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
}

export default configureStore;
