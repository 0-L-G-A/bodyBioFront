import { BODY_BIO_API_URL, REGUEST_METHODS, request } from './core';

export const fetchUsersAppointmentsApi = async (userId) => {
  const url = BODY_BIO_API_URL + 'users-appointments';
  const req = await request(url, {
    method: REGUEST_METHODS.GET,
    params: { userId: userId },
  });
  return req;
};

export const addUsersAppointmentApi = async (data) => {
  const url = BODY_BIO_API_URL + 'users-appointments';
  const req = await request(url, {
    method: REGUEST_METHODS.POST,
    data,
  });
  return req;
};

export const addUsersDiagnosisApi = async (data) => {
  const url = BODY_BIO_API_URL + 'users-diagnozes';
  const req = await request(url, {
    method: REGUEST_METHODS.POST,
    data,
  });
  return req;
};
