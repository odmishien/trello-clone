import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { RootReducer } from './reducers/RootReducer';

function createStore() {
  const store = reduxCreateStore(
    RootReducer,
    applyMiddleware(
      logger,
    )
  );
  return store;
}

export default createStore
