import {
  addUsersAppointmentApi,
  addUsersDiagnosisApi,
  fetchUsersAppointmentsApi,
} from 'api/medApp';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addUsersAppointment,
  addUsersAppointmentFailure,
  addUsersAppointmentSuccess,
  addUsersDiagnosis,
  addUsersDiagnosisFailure,
  addUsersDiagnosisSuccess,
} from 'store/actions/medApp';
import {
  fetchUsersAppointments,
  fetchUsersAppointmentsFailure,
  fetchUsersAppointmentsSuccess,
} from 'store/reducers/medApp';

function* fetchUsersAppointmentsSaga(action) {
  try {
    const response = yield call(fetchUsersAppointmentsApi, action.payload);
    yield put(fetchUsersAppointmentsSuccess(response));
  } catch (error) {
    yield put(fetchUsersAppointmentsFailure(error));
  }
}

function* addUsersAppointmentSaga(action) {
  try {
    const response = yield call(addUsersAppointmentApi, action.payload);
    yield put(addUsersAppointmentSuccess(response));
  } catch (error) {
    yield put(addUsersAppointmentFailure(error));
  }
}

function* addUsersDiagnisisSaga(action) {
  try {
    const response = yield call(addUsersDiagnosisApi, action.payload);
    yield put(addUsersDiagnosisSuccess(response));
  } catch (error) {
    yield put(addUsersDiagnosisFailure(error));
  }
}

export function* watchMedAppSaga() {
  yield takeLatest(fetchUsersAppointments.type, fetchUsersAppointmentsSaga);
  yield takeLatest(addUsersAppointment.type, addUsersAppointmentSaga);
  yield takeLatest(addUsersDiagnosis.type, addUsersDiagnisisSaga);
}
