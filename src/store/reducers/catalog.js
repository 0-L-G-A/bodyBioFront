import { createSlice } from '@reduxjs/toolkit';
import { mergeArrayToObject } from 'store/utils/arrToObj';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    bodySystemsArray: null,
    bodySystemsObj: {},
    findingsArr: [],
    diagnozesArr: [],
    labsArr: [],
    findingsObj: {},
    diagnozesObj: {},
    labsObj: {},

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
      state.bodySystemsObj = mergeArrayToObject(
        state.bodySystemsObj,
        action.payload,
      );
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
      state.bodySystemsObj = mergeArrayToObject(state.bodySystemsObj, [
        action.payload,
      ]);
    },
    fetchBodySystemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchDiagnozesByIds: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDiagnozesByIdsSuccess: (state, action) => {
      state.loading = false;
      const diagnozesArray = action.payload;
      state.diagnozesArr = [...state.diagnozesArr, ...diagnozesArray];
      state.diagnozesObj = mergeArrayToObject(
        state.diagnozesObj,
        action.payload,
      );
    },
    fetchDiagnozesByIdsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Mocks
    createBodySystem: (state) => {
      state.loading = true;
      state.error = null;
    },
    createBodySystemSuccess: (state, action) => {
      state.loading = false;
      // state.bodySystemsArray.push(action.payload);
      // state.bodySystemsObj[action.payload.id] = action.payload;
    },
    createBodySystemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateBodySystem: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateBodySystemSuccess: (state, action) => {
      state.loading = false;
      // const updatedSystem = action.payload;
      // state.bodySystemsObj[updatedSystem.id] = updatedSystem;
      // state.bodySystemsArray = state.bodySystemsArray.map((bs) =>
      //   bs.id === updatedSystem.id ? updatedSystem : bs
      // );
    },
    updateBodySystemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteBodySystem: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteBodySystemSuccess: (state, action) => {
      state.loading = false;
      // const id = action.payload;
      // delete state.bodySystemsObj[id];
      // state.bodySystemsArray = state.bodySystemsArray.filter((bs) => bs.id !== id);
    },
    deleteBodySystemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchDiagnozes: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDiagnozesSuccess: (state, action) => {
      state.loading = false;
      // state.diagnozesArray = action.payload;
      // action.payload.forEach((diagnoze) => {
      //   state.diagnozesObj[diagnoze.id] = diagnoze;
      // });
    },
    fetchDiagnozesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createDiagnoze: (state) => {
      state.loading = true;
      state.error = null;
    },
    createDiagnozeSuccess: (state, action) => {
      state.loading = false;
      state.diagnozesArray.push(action.payload);
      state.diagnozesObj[action.payload.id] = action.payload;
    },
    createDiagnozeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateDiagnoze: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateDiagnozeSuccess: (state, action) => {
      state.loading = false;
      // const updatedDiagnoze = action.payload;
      // state.diagnozesObj[updatedDiagnoze.id] = updatedDiagnoze;
      // state.diagnozesArray = state.diagnozesArray.map((diagnoze) =>
      //   diagnoze.id === updatedDiagnoze.id ? updatedDiagnoze : diagnoze
      // );
    },
    updateDiagnozeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteDiagnoze: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteDiagnozeSuccess: (state, action) => {
      state.loading = false;
      // const id = action.payload;
      // delete state.diagnozesObj[id];
      // state.diagnozesArray = state.diagnozesArray.filter(
      //   (diagnoze) => diagnoze.id !== id
      // );
    },
    deleteDiagnozeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchFindings: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFindingsSuccess: (state, action) => {
      state.loading = false;
      // state.findingsArray = action.payload;
      // action.payload.forEach((finding) => {
      //   state.findingsObj[finding.id] = finding;
      // });
    },
    fetchFindingsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchFindingsByIds: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFindingsByIdsSuccess: (state, action) => {
      state.loading = false;
      // const findingsArray = action.payload;
      // findingsArray.forEach((finding) => {
      //   state.findingsObj[finding.id] = finding;
      // });
      // state.findingsArray = [...state.findingsArray, ...findingsArray];
    },
    fetchFindingsByIdsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createFinding: (state) => {
      state.loading = true;
      state.error = null;
    },
    createFindingSuccess: (state, action) => {
      state.loading = false;
      const newFinding = action.payload;
      state.findingsArray.push(newFinding);
      state.findingsObj[newFinding.id] = newFinding;
    },
    createFindingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteFinding: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteFindingSuccess: (state, action) => {
      state.loading = false;
      // const id = action.payload;
      // delete state.findingsObj[id];
      // state.findingsArray = state.findingsArray.filter(
      //   (finding) => finding.id !== id
      // );
    },
    deleteFindingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchLabs: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchLabsSuccess: (state, action) => {
      state.loading = false;
      // state.labsArray = action.payload;
      // action.payload.forEach((lab) => {
      //   state.labsObj[lab.id] = lab;
      // });
    },
    fetchLabsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchLabsByIds: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchLabsByIdsSuccess: (state, action) => {
      state.loading = false;
      // const labsArray = action.payload;
      // labsArray.forEach((lab) => {
      //   state.labsObj[lab.id] = lab;
      // });
      // state.labsArray = [...state.labsArray, ...labsArray];
    },
    fetchLabsByIdsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createLab: (state) => {
      state.loading = true;
      state.error = null;
    },
    createLabSuccess: (state, action) => {
      state.loading = false;
      const newLab = action.payload;
      state.labsArray.push(newLab);
      state.labsObj[newLab.id] = newLab;
    },
    createLabFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteLab: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteLabSuccess: (state, action) => {
      state.loading = false;
      const id = action.payload;
      // delete state.labsObj[id];
      state.labsArray = state.labsArray.filter((lab) => lab.id !== id);
    },
    deleteLabFailure: (state, action) => {
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
  fetchDiagnozesByIds,
  fetchDiagnozesByIdsSuccess,
  fetchDiagnozesByIdsFailure,

  createBodySystem,
  createBodySystemSuccess,
  createBodySystemFailure,
  updateBodySystem,
  updateBodySystemSuccess,
  updateBodySystemFailure,
  deleteBodySystem,
  deleteBodySystemSuccess,
  deleteBodySystemFailure,
  fetchDiagnozes,
  fetchDiagnozesSuccess,
  fetchDiagnozesFailure,
  createDiagnoze,
  createDiagnozeSuccess,
  createDiagnozeFailure,
  updateDiagnoze,
  updateDiagnozeSuccess,
  updateDiagnozeFailure,
  deleteDiagnoze,
  deleteDiagnozeSuccess,
  deleteDiagnozeFailure,
  fetchFindings,
  fetchFindingsSuccess,
  fetchFindingsFailure,
  fetchFindingsByIds,
  fetchFindingsByIdsSuccess,
  fetchFindingsByIdsFailure,
  createFinding,
  createFindingSuccess,
  createFindingFailure,
  deleteFinding,
  deleteFindingSuccess,
  deleteFindingFailure,
  fetchLabs,
  fetchLabsSuccess,
  fetchLabsFailure,
  fetchLabsByIds,
  fetchLabsByIdsSuccess,
  fetchLabsByIdsFailure,
  createLab,
  createLabSuccess,
  createLabFailure,
  deleteLab,
  deleteLabSuccess,
  deleteLabFailure,
} = catalogSlice.actions;
export default catalogSlice.reducer;
