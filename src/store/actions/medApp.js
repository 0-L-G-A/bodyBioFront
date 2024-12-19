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

export const addUsersAppointment = createAction(
  'medApp/addUsersAppointment',
  (appointmentData) => ({ payload: appointmentData }),
);

export const addUsersAppointmentSuccess = createAction(
  'medApp/addUsersAppointmentSuccess',
  (appointmentData) => ({
    payload: appointmentData,
  }),
);

export const addUsersAppointmentFailure = createAction(
  'medApp/addUsersAppointmentFailure',
  (error) => ({
    payload: error,
  }),
);

export const addUsersDiagnosis = createAction(
  'medApp/addUsersDiagnosis',
  (appointmentData) => ({ payload: appointmentData }),
);

export const addUsersDiagnosisSuccess = createAction(
  'medApp/addUsersDiagnosisSuccess',
  (appointmentData) => ({
    payload: appointmentData,
  }),
);

export const addUsersDiagnosisFailure = createAction(
  'medApp/addUsersDiagnosisFailure',
  (error) => ({
    payload: error,
  }),
);
