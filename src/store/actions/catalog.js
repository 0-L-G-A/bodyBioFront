import { createAction } from '@reduxjs/toolkit';

export const fetchBodySystems = createAction('catalog/fetchBodySystems');

export const fetchBodySystemsSuccess = createAction(
  'catalog/fetchBodySystemsSuccess',
  (bodySystemsArray) => ({
    payload: bodySystemsArray,
  }),
);

export const fetchBodySystemsFailure = createAction(
  'catalog/fetchBodySystemsFailure',
  (error) => ({
    payload: error,
  }),
);

export const fetchBodySystem = createAction(
  'catalog/fetchBodySystem',
  (bodySystemId) => ({
    payload: bodySystemId,
  }),
);

export const fetchBodySystemSuccess = createAction(
  'catalog/fetchBodySystemSuccess',
  (bodySystems) => ({
    payload: bodySystems,
  }),
);

export const fetchBodySystemFailure = createAction(
  'catalog/fetchBodySystemFailure',
  (error) => ({
    payload: error,
  }),
);
