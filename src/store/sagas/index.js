import { all } from 'redux-saga/effects';
import { watchAuthSaga } from './auth';
import { watchCatalogSaga } from './catalog';

export function* rootSaga() {
  yield all([watchAuthSaga(), watchCatalogSaga()]);
}
