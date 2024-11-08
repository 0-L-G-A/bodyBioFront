import { createAction } from '@reduxjs/toolkit';

export const signUpUser = createAction('auth/signUpUser', (userData) => ({
  payload: userData,
}));

export const signUpUserSuccess = createAction(
  'auth/signUpUserSuccess',
  (user) => ({
    payload: user,
  }),
);

export const signUpUserFailure = createAction(
  'auth/signUpUserFailure',
  (error) => ({
    payload: error,
  }),
);

export const loginUser = createAction('auth/loginUser', (userData) => ({
  payload: userData,
}));

export const loginUserSuccess = createAction(
  'auth/loginUserSuccess',
  (user) => ({
    payload: user,
  }),
);

export const loginUserFailure = createAction(
  'auth/loginUserFailure',
  (error) => ({
    payload: error,
  }),
);

export const logoutUser = createAction('auth/logoutUser');

export const fetchUser = createAction('auth/fetchUser', (userId) => ({
  payload: userId,
}));

export const fetchUserSuccess = createAction(
  'auth/fetchUserSuccess',
  (user) => ({
    payload: user,
  }),
);

export const fetchUserFailure = createAction(
  'auth/fetchUserFailure',
  (error) => ({
    payload: error,
  }),
);

export const updateUser = createAction('auth/updateUser', (userData) => ({
  payload: userData,
}));

export const updateUserSuccess = createAction(
  'auth/updateUserSuccess',
  (user) => ({
    payload: user,
  }),
);

export const updateUserFailure = createAction(
  'auth/updateUserFailure',
  (error) => ({
    payload: error,
  }),
);

export const deleteUser = createAction('auth/deleteUser', (userId) => ({
  payload: userId,
}));

export const deleteUserSuccess = createAction(
  'auth/deleteUserSuccess',
  (userId) => ({
    payload: userId,
  }),
);

export const deleteUserFailure = createAction(
  'auth/deleteUserFailure',
  (error) => ({
    payload: error,
  }),
);
