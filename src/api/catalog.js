import { BODY_BIO_API_URL, REGUEST_METHODS, request } from './core';

export const fetchAllBodySystemsApi = async () => {
  const url = BODY_BIO_API_URL + 'body-systems';
  const req = await request(url, {
    method: REGUEST_METHODS.GET,
  });
  return req;
};

export const fetchBodySystemApi = async (params) => {
  const url = BODY_BIO_API_URL + 'body-systems/' + params;
  const req = await request(url, {
    method: REGUEST_METHODS.GET,
    params,
  });
  return req;
};
