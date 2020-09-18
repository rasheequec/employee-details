import { combineReducers } from "redux";
import { alert } from './alertReducer';
import { user } from './userReducer'
export default combineReducers({
  alert,
  user
});