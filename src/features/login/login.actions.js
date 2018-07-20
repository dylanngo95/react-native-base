import LoginTypes from './login.types';

export const requestLogin = () => ({
  type: LoginTypes.REQUEST_LOGIN,
});

export const loginFailure = error => ({
  type: LoginTypes.LOGIN_FAILURE,
  error,
});

export const loginSuccess = data => ({
  type: LoginTypes.LOGIN_SUCCESS,
  data,
});
