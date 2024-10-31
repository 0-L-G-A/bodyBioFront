import { createSlice } from '@reduxjs/toolkit';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    bodySystemsArray: null,

    familyMedicine: null,
    GeneralSurgery: null,
    EndocrineSystem: null,
    InfectiousDiseases: null,
    MusculoskeletalSystem: null,
    LymphaticSystem: null,
    ReproductiveSystem: null,
    HematologicSystem: null,
    OralandDentalSystem: null,
    UrinarySystem: null,
    cardiovascularSystem: null,
    nervousSystem: null,
    ImmuneSystem: null,
    SensoryOrgans: null,
    DigestiveSystem: null,
    IntegumentarySystem: null,
    respiratorySystem: null,

    loading: false,
    error: null,
  },
  reducers: {
    fetchBodySystems: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBodySystemsSuccess: (state, action) => {
      state.loading = false;
      state.bodySystemsArray = action.payload;
      action.payload.forEach((BS) => {
        const key = BS.nameKey;
        state[key] = BS;
      });
    },
    fetchBodySystemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchBodySystem: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBodySystemSuccess: (state, action) => {
      const key = action.payload.nameKey;
      state.loading = false;
      state[key] = action.payload;
    },
    fetchBodySystemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchBodySystems,
  fetchBodySystemsSuccess,
  fetchBodySystemsFailure,
  fetchBodySystem,
  fetchBodySystemSuccess,
  fetchBodySystemFailure,
} = catalogSlice.actions;
export default catalogSlice.reducer;
