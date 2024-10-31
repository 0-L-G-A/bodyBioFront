import { loginUserPostApi, signUpUserPostApi } from 'api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  signUpUserFailure,
  signUpUser,
  signUpUserSuccess,
  loginUser,
  loginUserSuccess,
  loginUserFailure,
} from 'store/actions/auth';

function* signUpUserSaga(action) {
  try {
    const response = yield call(signUpUserPostApi, action.payload);
    yield put(signUpUserSuccess(response.user));
  } catch (error) {
    yield put(signUpUserFailure(error));
  }
}

function* loginUserSaga(action) {
  try {
    const response = yield call(loginUserPostApi, action.payload);
    yield put(loginUserSuccess(response.user));
  } catch (error) {
    yield put(loginUserFailure(error));
  }
}

export function* watchAuthSaga() {
  yield takeLatest(signUpUser.type, signUpUserSaga);
  yield takeLatest(loginUser.type, loginUserSaga);
}
