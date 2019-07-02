// @flow

type Types = {
  [string]: string
};
const types: Types = {
  SEND_REQUEST: 'auth/SEND_REQUEST',
  SET_DATA: 'auth/LOAD_SESSION',
  SET_ERROR: 'auth/SIGN_IN',
};

export default types;