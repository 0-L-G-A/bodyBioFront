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

export const logoutUser = createAction('auth/logOutUser');
