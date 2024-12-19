import { createSlice } from '@reduxjs/toolkit';

const medAppSlice = createSlice({
  name: 'medApp',
  initialState: {
    loading: false,
    error: null,
    appointmentsArray: null,
    currentAppointment: null,
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
    addUsersAppointment: (state) => {
      state.loading = true;
      state.error = null;
    },
    addUsersAppointmentSuccess: (state, action) => {
      state.loading = false;
      state.currentAppointment = action.payload;
    },
    addUsersAppointmentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addUsersDiagnosis: (state) => {
      state.loading = true;
      state.error = null;
    },
    addUsersDiagnosisSuccess: (state, action) => {
      state.loading = false;
      // state.currentAppointment = action.payload;
    },
    addUsersDiagnosisFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersAppointments,
  fetchUsersAppointmentsSuccess,
  fetchUsersAppointmentsFailure,
  addUsersAppointment,
  addUsersAppointmentSuccess,
  addUsersAppointmentFailure,
  addUsersDiagnosis,
  addUsersDiagnosisSuccess,
  addUsersDiagnosisFailure,
} = medAppSlice.actions;
export default medAppSlice.reducer;
