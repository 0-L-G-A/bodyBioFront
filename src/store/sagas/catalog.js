import { fetchAllBodySystemsApi, fetchBodySystemApi } from 'api/catalog';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchBodySystem,
  fetchBodySystems,
  fetchBodySystemsFailure,
  fetchBodySystemsSuccess,
  fetchBodySystemSuccess,
} from 'store/actions/catalog';

function* fetchAllBodySystemsSaga() {
  try {
    const response = yield call(fetchAllBodySystemsApi);
    yield put(fetchBodySystemsSuccess(response));
  } catch (error) {
    yield put(fetchBodySystemsFailure(error));
  }
}

function* fetchBodySystemSaga(action) {
  try {
    const response = yield call(fetchBodySystemApi, action.payload);
    yield put(fetchBodySystemSuccess(response));
  } catch (error) {
    yield put(fetchBodySystemsFailure(error));
  }
}

export function* watchCatalogSaga() {
  yield takeLatest(fetchBodySystems.type, fetchAllBodySystemsSaga);
  yield takeLatest(fetchBodySystem.type, fetchBodySystemSaga);
}
