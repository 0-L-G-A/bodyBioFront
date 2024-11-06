import { createAction } from '@reduxjs/toolkit';

export const fetchUsersAppointments = createAction(
  'medApp/fetchUsersAppointments',
  (userId) => ({ payload: userId }),
);

export const fetchUsersAppointmentsSuccess = createAction(
  'medApp/fetchUsersAppointmentsSuccess',
  (appointmentsArray) => ({
    payload: appointmentsArray,
  }),
);

export const fetchUsersAppointmentsFailure = createAction(
  'medApp/fetchUsersAppointmentsFailure',
  (error) => ({
    payload: error,
  }),
);
