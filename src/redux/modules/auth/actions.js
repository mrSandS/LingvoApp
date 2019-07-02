// @flow

import { createActions } from 'redux-actions';
import types from './types';

export const {
  sendRequest,
  setData,
  setError
} = createActions(
  types.SEND_REQUEST,
  types.SET_DATA,
  types.SET_ERROR,
);