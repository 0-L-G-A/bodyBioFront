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
  });
  return req;
};

export const fetchDiagnozesByIdsApi = async (ids) => {
  const url = BODY_BIO_API_URL + 'diagnozes/by-ids';
  const req = await request(url, {
    method: REGUEST_METHODS.POST,
    data: { itemsIds: ids },
  });
  return req;
};

export const createBodySystemApi = async (data) => {
  // const url = BODY_BIO_API_URL + 'body-systems';
  // const req = await request(url, {
  //   method: REGUEST_METHODS.POST,
  //   body: JSON.stringify(data),
  // });
  // return req;
};

export const updateBodySystemApi = async (id, data) => {
  // const url = `${BODY_BIO_API_URL}body-systems/${id}`;
  // const req = await request(url, {
  //   method: REGUEST_METHODS.PUT,
  //   body: JSON.stringify(data),
  // });
  // return req;
};

export const deleteBodySystemApi = async (id) => {
  // const url = `${BODY_BIO_API_URL}body-systems/${id}`;
  // const req = await request(url, { method: REGUEST_METHODS.DELETE });
  // return req;
};

export const fetchDiagnozesApi = async () => {
  // const url = BODY_BIO_API_URL + 'diagnozes';
  // const req = await request(url, { method: REGUEST_METHODS.GET });
  // return req;
};

export const createDiagnozeApi = async (data) => {
  const url = BODY_BIO_API_URL + 'diagnozes';
  const req = await request(url, {
    method: REGUEST_METHODS.POST,
    data,
  });
  return req;
};

export const updateDiagnozeApi = async (id, data) => {
  // const url = `${BODY_BIO_API_URL}diagnozes/${id}`;
  // const req = await request(url, {
  //   method: REGUEST_METHODS.PUT,
  //   body: JSON.stringify(data),
  // });
  // return req;
};

export const deleteDiagnozeApi = async (id) => {
  // const url = `${BODY_BIO_API_URL}diagnozes/${id}`;
  // const req = await request(url, { method: REGUEST_METHODS.DELETE });
  // return req;
};

export const fetchAllFindingsApi = async () => {
  // const url = BODY_BIO_API_URL + 'findings';
  // const req = await request(url, {
  //   method: REGUEST_METHODS.GET,
  // });
  // return req;
};

export const fetchFindingsByIdsApi = async (ids) => {
  // const url = BODY_BIO_API_URL + 'findings/by-ids';
  // const req = await request(url, {
  //   method: REGUEST_METHODS.POST,
  //   body: JSON.stringify({ itemsIds: ids }),
  // });
  // return req;
};

export const createFindingApi = async (data) => {
  console.log('api', data);
  const url = BODY_BIO_API_URL + 'findings';
  const req = await request(url, {
    method: REGUEST_METHODS.POST,
    data,
  });
  return req;
};

export const deleteFindingApi = async (id) => {
  // const url = `${BODY_BIO_API_URL}findings/${id}`;
  // const req = await request(url, {
  //   method: REGUEST_METHODS.DELETE,
  // });
  // return req;
};

export const fetchAllLabsApi = async () => {
  // const url = BODY_BIO_API_URL + 'labs';
  // const req = await request(url, {
  //   method: REGUEST_METHODS.GET,
  // });
  // return req;
};

export const fetchLabsByIdsApi = async (ids) => {
  // const url = BODY_BIO_API_URL + 'labs/by-ids';
  // const req = await request(url, {
  //   method: REGUEST_METHODS.POST,
  //   body: JSON.stringify({ labsIds: ids }),
  // });
  // return req;
};

export const createLabApi = async (data) => {
  const url = BODY_BIO_API_URL + 'labs';
  const req = await request(url, {
    method: REGUEST_METHODS.POST,
    data,
  });
  return req;
};

export const deleteLabApi = async (id) => {
  const url = `${BODY_BIO_API_URL}labs/${id}`;
  const req = await request(url, {
    method: REGUEST_METHODS.DELETE,
  });
  return req;
};
