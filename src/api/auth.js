import { BODY_BIO_API_URL, REGUEST_METHODS, request } from './core';

export const signUpUserPostApi = async (data) => {
  const url = BODY_BIO_API_URL + 'users/signUp';
  const req = await request(url, {
    method: REGUEST_METHODS.POST,
    data,
  });
  return req;
};

export const loginUserPostApi = async (data) => {
  const url = BODY_BIO_API_URL + 'users/login';
  const req = await request(url, {
    method: REGUEST_METHODS.POST,
    data,
  });
  return req;
};

export const fetchUserApi = async (userId) => {
  const url = BODY_BIO_API_URL + 'users/' + userId;
  const req = await request(url, {
    method: REGUEST_METHODS.GET,
  });
  return req;
};

export const updateUserApi = async (data) => {
  const url = BODY_BIO_API_URL + 'users/' + data.id;
  const req = await request(url, {
    method: REGUEST_METHODS.PUT,
    data,
  });
  return req;
};

export const deleteUserApi = async (userId) => {
  const url = BODY_BIO_API_URL + 'users/' + userId;
  const req = await request(url, {
    method: REGUEST_METHODS.DELETE,
  });
  return req;
};

// get users answer
// {
//   "id": "5caf228c-faf5-4d80-a78a-f40b01852d6f",
//   "name": "Ol",
//   "surname": "Lo",
//   "role": "patient",
//   "email": "lo@gmail.com",
//   "contactNumber": "+87549876543",
//   "insuranceId": "kjhgfdsdfgh345",
//   "createdAt": "2024-10-26T23:07:59.760Z",
//   "patientsIds": [],
//   "doctorsIds": [],
//   "adminsIds": [],
//   "trustPersonsIds": [],
//   "isAlive": true,
//   "sex": "male",
//   "preferedLanguage": "ENG"
// }

// post users/signup Body
// {
//   "name": "Ad",
//   "surname": "Adm",
//   "role": "super_admin",
//   "email": "ol9n7@gmail.com",
//   "password": "123456789",
//   "contactNumber": "+384",
//   "insuranceId": "ins1dor",
//   "isAlive": true,
//   "sex": "male",
//   "preferedLanguage": "ENG",
//   "patientsIds": [],
//   "doctorsIds": [],
//   "adminsIds": [],
//   "trustPersonsIds": [],
//   "appointments": [],
//   "usersLabs": [],
//   "usersDiagnozes": [],
//   "usersFindings": []
// }
