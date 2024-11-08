import { createSlice } from '@reduxjs/toolkit';
import { mergeArrayToObject } from 'store/utils/arrToObj';

const loadUserFromLocalStorage = () => {
  try {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Помилка при завантаженні користувача з localStorage', error);
    return null;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: loadUserFromLocalStorage(),
    loading: false,
    error: null,
    usersArray: {},
  },
  reducers: {
    signUpUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpUserSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      console.log('auth', { action, state });
      localStorage.setItem('userData', JSON.stringify(action.payload));
      state.usersArray = mergeArrayToObject(state.usersArray, action.payload);
    },
    signUpUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      console.log('auth', { action, state });
      localStorage.setItem('userData', JSON.stringify(action.payload));
      state.usersArray = mergeArrayToObject(state.usersArray, [action.payload]);
    },
    loginUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.userData = null;
      console.log('auth log out', { state });
      localStorage.removeItem('userData');
      localStorage.clear();
    },
    fetchUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.usersArray = mergeArrayToObject(state.usersArray, [action.payload]);
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      // state.usersArray = mergeArrayToObject(state.usersArray, [action.payload]);
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      // delete state.usersArray[action.payload];
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signUpUser,
  signUpUserSuccess,
  signUpUserFailure,
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  logoutUser,
  fetchUser,
  fetchUserSuccess,
  fetchUserFailure,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
