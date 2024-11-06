import axios from 'axios';

export const BODY_BIO_API_URL = 'https://mbbioprod.up.railway.app/';

export const REGUEST_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

export const request = async (
  url,
  { method = REGUEST_METHODS.GET, params = {}, data = {} } = {},
) => {
  try {
    let response = null;

    if (method === REGUEST_METHODS.POST) {
      response = await axios[method](url, data);
    }

    if (method === REGUEST_METHODS.GET) {
      console.log('api', { url, params, method, data });
      response = await axios[method](url, { params });
    }

    return response.data;
  } catch (error) {
    console.error('Error during the request:', error);
    throw error;
  }
};
