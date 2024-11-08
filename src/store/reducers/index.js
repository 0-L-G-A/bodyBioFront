import { combineReducers } from 'redux';
import authReducer from './auth';
import catalogReducer from './catalog';
import medAppReducer from './medApp';

const rootReducer = combineReducers({
  auth: authReducer,
  catalog: catalogReducer,
  medApp: medAppReducer,
});

export default rootReducer;
