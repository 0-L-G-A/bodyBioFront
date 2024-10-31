import { createSlice } from '@reduxjs/toolkit';

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
  },
  reducers: {
    signUpUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpUserSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
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
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    loginUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.userData = null;
      localStorage.removeItem('userData');
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
} = authSlice.actions;
export default authSlice.reducer;
