import { fetchUsersAppointmentsApi } from 'api/medApp';
import { call, put, takeLatest } from 'redux-saga/effects';
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

export function* watchMedAppSaga() {
  yield takeLatest(fetchUsersAppointments.type, fetchUsersAppointmentsSaga);
}
