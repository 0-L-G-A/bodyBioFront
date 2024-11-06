import {
  fetchUserApi,
  loginUserPostApi,
  signUpUserPostApi,
  updateUserApi,
  deleteUserApi,
} from 'api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  signUpUserFailure,
  signUpUser,
  signUpUserSuccess,
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  fetchUser,
  fetchUserSuccess,
  fetchUserFailure,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
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

function* fetchUserSaga(action) {
  try {
    const response = yield call(fetchUserApi, action.payload);
    yield put(fetchUserSuccess(response.user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* updateUserSaga(action) {
  try {
    const response = yield call(updateUserApi, action.payload);
    yield put(updateUserSuccess(response.user));
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

function* deleteUserSaga(action) {
  try {
    yield call(deleteUserApi, action.payload);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

export function* watchAuthSaga() {
  yield takeLatest(signUpUser.type, signUpUserSaga);
  yield takeLatest(loginUser.type, loginUserSaga);
  yield takeLatest(fetchUser.type, fetchUserSaga);
  yield takeLatest(updateUser.type, updateUserSaga);
  yield takeLatest(deleteUser.type, deleteUserSaga);
}
