import { combineReducers } from 'redux';
import personReducer from './personReducer';
import googleAuthReducer from './googleAuthReducer';

export default combineReducers({
  person: personReducer,
  auth: googleAuthReducer
});
