import { combineReducers } from 'redux';
import authReducer from './auth';
import catalogReducer from './catalog';

const rootReducer = combineReducers({
  auth: authReducer,
  catalog: catalogReducer,
});

export default rootReducer;
