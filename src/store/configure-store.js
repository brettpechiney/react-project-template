import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import logger from 'redux-logger';
import rootReducer from './slices/root-reducer';

function configureAppStore(preloadedState) {
  const middleware = [...getDefaultMiddleware()];
  const { logRedux = false } = window.variables;
  if (logRedux) {
    middleware.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState,
  });

  return store;
}

export default configureAppStore;
