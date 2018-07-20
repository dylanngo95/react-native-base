import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchDog, loginApi } from '../api/login.api';
import LoginTypes from '../../features/login/login.types';

export function* rootSaga() {
  yield takeLatest(LoginTypes.REQUEST_LOGIN, login);
}

export function* login() {
  try {
    const response = yield loginApi();
    yield put({ type: LoginTypes.LOGIN_SUCCESS, error: null, data: response.data });
  } catch (er) {
    yield put({ type: LoginTypes.LOGIN_FAILURE, error: er, data: null });
  }
}
