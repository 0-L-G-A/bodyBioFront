import { BODY_BIO_API_URL, REGUEST_METHODS, request } from './core';

export const fetchUsersAppointmentsApi = async (userId) => {
  const url = BODY_BIO_API_URL + 'users-appointments';
  const req = await request(url, {
    method: REGUEST_METHODS.GET,
    params: { userId: userId },
  });
  return req;
};
