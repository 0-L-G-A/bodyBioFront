import {
  fetchAllBodySystemsApi,
  fetchBodySystemApi,
  createBodySystemApi,
  updateBodySystemApi,
  deleteBodySystemApi,
  fetchDiagnozesApi,
  fetchDiagnozesByIdsApi,
  createDiagnozeApi,
  updateDiagnozeApi,
  deleteDiagnozeApi,
  fetchAllFindingsApi,
  fetchFindingsByIdsApi,
  createFindingApi,
  deleteFindingApi,
  fetchAllLabsApi,
  fetchLabsByIdsApi,
  createLabApi,
  deleteLabApi,
} from 'api/catalog';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchBodySystems,
  fetchBodySystemsSuccess,
  fetchBodySystemsFailure,
  fetchBodySystem,
  fetchBodySystemSuccess,
  fetchBodySystemFailure,
  createBodySystem,
  createBodySystemSuccess,
  createBodySystemFailure,
  updateBodySystem,
  updateBodySystemSuccess,
  updateBodySystemFailure,
  deleteBodySystem,
  deleteBodySystemSuccess,
  deleteBodySystemFailure,
  fetchDiagnozes,
  fetchDiagnozesSuccess,
  fetchDiagnozesFailure,
  fetchDiagnozesByIds,
  fetchDiagnozesByIdsSuccess,
  fetchDiagnozesByIdsFailure,
  createDiagnoze,
  createDiagnozeSuccess,
  createDiagnozeFailure,
  updateDiagnoze,
  updateDiagnozeSuccess,
  updateDiagnozeFailure,
  deleteDiagnoze,
  deleteDiagnozeSuccess,
  deleteDiagnozeFailure,
  fetchFindings,
  fetchFindingsSuccess,
  fetchFindingsFailure,
  fetchFindingsByIds,
  fetchFindingsByIdsSuccess,
  fetchFindingsByIdsFailure,
  createFinding,
  createFindingSuccess,
  createFindingFailure,
  deleteFinding,
  deleteFindingSuccess,
  deleteFindingFailure,
  fetchLabs,
  fetchLabsSuccess,
  fetchLabsFailure,
  fetchLabsByIds,
  fetchLabsByIdsSuccess,
  fetchLabsByIdsFailure,
  createLab,
  createLabSuccess,
  createLabFailure,
  deleteLab,
  deleteLabSuccess,
  deleteLabFailure,
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
    yield put(fetchBodySystemFailure(error));
  }
}

function* fetchDiagnozesByIdsSaga(action) {
  try {
    const response = yield call(fetchDiagnozesByIdsApi, action.payload);
    yield put(fetchDiagnozesByIdsSuccess(response));
    console.log('fetchDiagnozesByIdsSaga S', { response });
  } catch (error) {
    console.log('fetchDiagnozesByIdsSaga F', { error });
    yield put(fetchDiagnozesByIdsFailure(error));
  }
}

function* createBodySystemSaga(action) {
  // try {
  //   const response = yield call(createBodySystemApi, action.payload);
  //   yield put(createBodySystemSuccess(response));
  // } catch (error) {
  //   yield put(createBodySystemFailure(error));
  // }
}

function* updateBodySystemSaga(action) {
  // try {
  //   const response = yield call(
  //     updateBodySystemApi,
  //     action.payload.id,
  //     action.payload.updateData,
  //   );
  //   yield put(updateBodySystemSuccess(response));
  // } catch (error) {
  //   yield put(updateBodySystemFailure(error));
  // }
}

function* deleteBodySystemSaga(action) {
  // try {
  //   yield call(deleteBodySystemApi, action.payload);
  //   yield put(deleteBodySystemSuccess(action.payload));
  // } catch (error) {
  //   yield put(deleteBodySystemFailure(error));
  // }
}

function* fetchDiagnozesSaga() {
  // try {
  //   const response = yield call(fetchDiagnozesApi);
  //   yield put(fetchDiagnozesSuccess(response));
  // } catch (error) {
  //   yield put(fetchDiagnozesFailure(error));
  // }
}

function* createDiagnozeSaga(action) {
  // try {
  //   const response = yield call(createDiagnozeApi, action.payload);
  //   yield put(createDiagnozeSuccess(response));
  // } catch (error) {
  //   yield put(createDiagnozeFailure(error));
  // }
}

function* updateDiagnozeSaga(action) {
  // try {
  //   const response = yield call(
  //     updateDiagnozeApi,
  //     action.payload.id,
  //     action.payload.updateData,
  //   );
  //   yield put(updateDiagnozeSuccess(response));
  // } catch (error) {
  //   yield put(updateDiagnozeFailure(error));
  // }
}

function* deleteDiagnozeSaga(action) {
  // try {
  //   yield call(deleteDiagnozeApi, action.payload);
  //   yield put(deleteDiagnozeSuccess(action.payload));
  // } catch (error) {
  //   yield put(deleteDiagnozeFailure(error));
  // }
}

function* fetchFindingsSaga() {
  // try {
  //   const response = yield call(fetchAllFindingsApi);
  //   yield put(fetchFindingsSuccess(response));
  // } catch (error) {
  //   yield put(fetchFindingsFailure(error));
  // }
}

function* fetchFindingsByIdsSaga(action) {
  // try {
  //   const response = yield call(fetchFindingsByIdsApi, action.payload);
  //   yield put(fetchFindingsByIdsSuccess(response));
  // } catch (error) {
  //   yield put(fetchFindingsByIdsFailure(error));
  // }
}

function* createFindingSaga(action) {
  // try {
  //   const response = yield call(createFindingApi, action.payload);
  //   yield put(createFindingSuccess(response));
  // } catch (error) {
  //   yield put(createFindingFailure(error));
  // }
}

function* deleteFindingSaga(action) {
  // try {
  //   yield call(deleteFindingApi, action.payload);
  //   yield put(deleteFindingSuccess(action.payload));
  // } catch (error) {
  //   yield put(deleteFindingFailure(error));
  // }
}

function* fetchLabsSaga() {
  // try {
  //   const response = yield call(fetchAllLabsApi);
  //   yield put(fetchLabsSuccess(response));
  // } catch (error) {
  //   yield put(fetchLabsFailure(error));
  // }
}

function* fetchLabsByIdsSaga(action) {
  // try {
  //   const response = yield call(fetchLabsByIdsApi, action.payload);
  //   yield put(fetchLabsByIdsSuccess(response));
  // } catch (error) {
  //   yield put(fetchLabsByIdsFailure(error));
  // }
}

function* createLabSaga(action) {
  // try {
  //   const response = yield call(createLabApi, action.payload);
  //   yield put(createLabSuccess(response));
  // } catch (error) {
  //   yield put(createLabFailure(error));
  // }
}

function* deleteLabSaga(action) {
  // try {
  //   yield call(deleteLabApi, action.payload);
  //   yield put(deleteLabSuccess(action.payload));
  // } catch (error) {
  //   yield put(deleteLabFailure(error));
  // }
}

export function* watchCatalogSaga() {
  yield takeLatest(fetchBodySystems.type, fetchAllBodySystemsSaga);
  yield takeLatest(fetchBodySystem.type, fetchBodySystemSaga);
  yield takeLatest(createBodySystem.type, createBodySystemSaga);
  yield takeLatest(updateBodySystem.type, updateBodySystemSaga);
  yield takeLatest(deleteBodySystem.type, deleteBodySystemSaga);
  yield takeLatest(fetchDiagnozes.type, fetchDiagnozesSaga);
  yield takeLatest(fetchDiagnozesByIds.type, fetchDiagnozesByIdsSaga);
  yield takeLatest(createDiagnoze.type, createDiagnozeSaga);
  yield takeLatest(updateDiagnoze.type, updateDiagnozeSaga);
  yield takeLatest(deleteDiagnoze.type, deleteDiagnozeSaga);
  yield takeLatest(fetchFindings.type, fetchFindingsSaga);
  yield takeLatest(fetchFindingsByIds.type, fetchFindingsByIdsSaga);
  yield takeLatest(createFinding.type, createFindingSaga);
  yield takeLatest(deleteFinding.type, deleteFindingSaga);
  yield takeLatest(fetchLabs.type, fetchLabsSaga);
  yield takeLatest(fetchLabsByIds.type, fetchLabsByIdsSaga);
  yield takeLatest(createLab.type, createLabSaga);
  yield takeLatest(deleteLab.type, deleteLabSaga);
}
