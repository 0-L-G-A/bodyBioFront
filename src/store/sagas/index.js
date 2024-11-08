import { all } from 'redux-saga/effects';
import { watchAuthSaga } from './auth';
import { watchCatalogSaga } from './catalog';
import { watchMedAppSaga } from './medApp';

export function* rootSaga() {
  yield all([watchAuthSaga(), watchCatalogSaga(), watchMedAppSaga()]);
}
