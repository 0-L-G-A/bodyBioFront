import { createAction } from '@reduxjs/toolkit';

export const fetchBodySystems = createAction('catalog/fetchBodySystems');

export const fetchBodySystemsSuccess = createAction(
  'catalog/fetchBodySystemsSuccess',
  (bodySystemsArray) => ({
    payload: bodySystemsArray,
  }),
);

export const fetchBodySystemsFailure = createAction(
  'catalog/fetchBodySystemsFailure',
  (error) => ({
    payload: error,
  }),
);

export const fetchBodySystem = createAction(
  'catalog/fetchBodySystem',
  (bodySystemId) => ({
    payload: bodySystemId,
  }),
);

export const fetchBodySystemSuccess = createAction(
  'catalog/fetchBodySystemSuccess',
  (bodySystems) => ({
    payload: bodySystems,
  }),
);

export const fetchBodySystemFailure = createAction(
  'catalog/fetchBodySystemFailure',
  (error) => ({
    payload: error,
  }),
);

export const fetchDiagnozesByIds = createAction(
  'catalog/fetchDiagnozesByIds',
  (ids) => ({
    payload: ids,
  }),
);
export const fetchDiagnozesByIdsSuccess = createAction(
  'catalog/fetchDiagnozesByIdsSuccess',
  (diagnozesArray) => ({
    payload: diagnozesArray,
  }),
);

export const fetchDiagnozesByIdsFailure = createAction(
  'catalog/fetchDiagnozesByIdsFailure',
  (error) => ({
    payload: error,
  }),
);

//Mocks

export const createBodySystem = createAction(
  'catalog/createBodySystem',
  (bodySystemData) => ({
    payload: bodySystemData,
  }),
);
export const createBodySystemSuccess = createAction(
  'catalog/createBodySystemSuccess',
  (bodySystem) => ({
    payload: bodySystem,
  }),
);

export const createBodySystemFailure = createAction(
  'catalog/createBodySystemFailure',
  (error) => ({
    payload: error,
  }),
);

export const updateBodySystem = createAction(
  'catalog/updateBodySystem',
  (id, updateData) => ({
    payload: { id, updateData },
  }),
);
export const updateBodySystemSuccess = createAction(
  'catalog/updateBodySystemSuccess',
  (bodySystem) => ({
    payload: bodySystem,
  }),
);

export const updateBodySystemFailure = createAction(
  'catalog/updateBodySystemFailure',
  (error) => ({
    payload: error,
  }),
);

export const deleteBodySystem = createAction(
  'catalog/deleteBodySystem',
  (id) => ({
    payload: id,
  }),
);
export const deleteBodySystemSuccess = createAction(
  'catalog/deleteBodySystemSuccess',
  (bodySystemId) => ({
    payload: bodySystemId,
  }),
);

export const deleteBodySystemFailure = createAction(
  'catalog/deleteBodySystemFailure',
  (error) => ({
    payload: error,
  }),
);

export const fetchDiagnozes = createAction('catalog/fetchDiagnozes');
export const fetchDiagnozesSuccess = createAction(
  'catalog/fetchDiagnozesSuccess',
  (diagnozesArray) => ({
    payload: diagnozesArray,
  }),
);
export const fetchDiagnozesFailure = createAction(
  'catalog/fetchDiagnozesFailure',
  (error) => ({
    payload: error,
  }),
);

export const createDiagnoze = createAction(
  'catalog/createDiagnoze',
  (diagnozeData) => ({
    payload: diagnozeData,
  }),
);
export const createDiagnozeSuccess = createAction(
  'catalog/createDiagnozeSuccess',
  (diagnoze) => ({
    payload: diagnoze,
  }),
);

export const createDiagnozeFailure = createAction(
  'catalog/createDiagnozeFailure',
  (error) => ({
    payload: error,
  }),
);

export const updateDiagnoze = createAction(
  'catalog/updateDiagnoze',
  (id, updateData) => ({
    payload: { id, updateData },
  }),
);
export const updateDiagnozeSuccess = createAction(
  'catalog/updateDiagnozeSuccess',
  (updatedDiagnoze) => ({
    payload: updatedDiagnoze,
  }),
);

export const updateDiagnozeFailure = createAction(
  'catalog/updateDiagnozeFailure',
  (error) => ({
    payload: error,
  }),
);

export const deleteDiagnoze = createAction('catalog/deleteDiagnoze', (id) => ({
  payload: id,
}));
export const deleteDiagnozeSuccess = createAction(
  'catalog/deleteDiagnozeSuccess',
  (diagnozeId) => ({
    payload: diagnozeId,
  }),
);

export const deleteDiagnozeFailure = createAction(
  'catalog/deleteDiagnozeFailure',
  (error) => ({
    payload: error,
  }),
);

export const fetchFindings = createAction('catalog/fetchFindings');
export const fetchFindingsSuccess = createAction(
  'catalog/fetchFindingsSuccess',
  (findingsArray) => ({
    payload: findingsArray,
  }),
);
export const fetchFindingsFailure = createAction(
  'catalog/fetchFindingsFailure',
  (error) => ({
    payload: error,
  }),
);

export const fetchFindingsByIds = createAction(
  'catalog/fetchFindingsByIds',
  (ids) => ({
    payload: ids,
  }),
);
export const fetchFindingsByIdsSuccess = createAction(
  'catalog/fetchFindingsByIdsSuccess',
  (findingsArray) => ({
    payload: findingsArray,
  }),
);
export const fetchFindingsByIdsFailure = createAction(
  'catalog/fetchFindingsByIdsFailure',
  (error) => ({
    payload: error,
  }),
);

export const createFinding = createAction(
  'catalog/createFinding',
  (findingData) => ({
    payload: findingData,
  }),
);
export const createFindingSuccess = createAction(
  'catalog/createFindingSuccess',
  (finding) => ({
    payload: finding,
  }),
);
export const createFindingFailure = createAction(
  'catalog/createFindingFailure',
  (error) => ({
    payload: error,
  }),
);

export const deleteFinding = createAction('catalog/deleteFinding', (id) => ({
  payload: id,
}));
export const deleteFindingSuccess = createAction(
  'catalog/deleteFindingSuccess',
  (findingId) => ({
    payload: findingId,
  }),
);
export const deleteFindingFailure = createAction(
  'catalog/deleteFindingFailure',
  (error) => ({
    payload: error,
  }),
);

export const fetchLabs = createAction('catalog/fetchLabs');
export const fetchLabsSuccess = createAction(
  'catalog/fetchLabsSuccess',
  (labsArray) => ({
    payload: labsArray,
  }),
);
export const fetchLabsFailure = createAction(
  'catalog/fetchLabsFailure',
  (error) => ({
    payload: error,
  }),
);

export const fetchLabsByIds = createAction('catalog/fetchLabsByIds', (ids) => ({
  payload: ids,
}));
export const fetchLabsByIdsSuccess = createAction(
  'catalog/fetchLabsByIdsSuccess',
  (labsArray) => ({
    payload: labsArray,
  }),
);
export const fetchLabsByIdsFailure = createAction(
  'catalog/fetchLabsByIdsFailure',
  (error) => ({
    payload: error,
  }),
);

export const createLab = createAction('catalog/createLab', (labData) => ({
  payload: labData,
}));
export const createLabSuccess = createAction(
  'catalog/createLabSuccess',
  (lab) => ({
    payload: lab,
  }),
);
export const createLabFailure = createAction(
  'catalog/createLabFailure',
  (error) => ({
    payload: error,
  }),
);

export const deleteLab = createAction('catalog/deleteLab', (id) => ({
  payload: id,
}));
export const deleteLabSuccess = createAction(
  'catalog/deleteLabSuccess',
  (labId) => ({
    payload: labId,
  }),
);
export const deleteLabFailure = createAction(
  'catalog/deleteLabFailure',
  (error) => ({
    payload: error,
  }),
);
