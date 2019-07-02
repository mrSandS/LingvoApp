import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import auth from './modules/auth';

const rootReducer = combineReducers({
  auth,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

export default store