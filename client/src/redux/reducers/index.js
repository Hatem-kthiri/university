import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import adminReducer from "./adminReducer";
import studentReducer from "./studentReducer";
import professorReducer from "./professorReducer";
const rootReducer = combineReducers({
  LoginReducer,
  adminReducer,
  studentReducer,
  professorReducer,
});

export default rootReducer;
