import { combineReducers } from "redux";
import { alert } from './alertReducer';
import { user } from './userReducer';
import { employee } from './employeeReducer'
export default combineReducers({
  alert,
  user,
  employee
});