import { createSlice } from '@reduxjs/toolkit';

const medAppSlice = createSlice({
  name: 'medApp',
  initialState: {
    loading: false,
    error: null,
    appointmentsArray: null,
  },
  reducers: {
    fetchUsersAppointments: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersAppointmentsSuccess: (state, action) => {
      state.loading = false;
      state.appointmentsArray = action.payload;
    },
    fetchUsersAppointmentsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersAppointments,
  fetchUsersAppointmentsSuccess,
  fetchUsersAppointmentsFailure,
} = medAppSlice.actions;
export default medAppSlice.reducer;
