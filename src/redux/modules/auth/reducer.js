// @flow

import { handleActions } from 'redux-actions';
import types from './types';

type State = {
  +data: ?{},
  +isLoading: boolean,
  +error: ?{}
};

type Action = {
  +type: string,
  +payload: {},
};

const initialState: State = {
  data: null,
  isLoading: false,
  error: null
};

const authReducer = handleActions({
  [types.SEND_REQUEST]: (state: State): State => ({...state, isLoading: true, error: null }),
  [types.SET_DATA]: (state: State, {payload}: Action): State => ({...state, isLoading: false, data: payload}),
  [types.SET_ERROR]: (state: State, {payload}: Action): State => ({...state, isLoading: false, error: payload}),
}, initialState);

export default authReducer
