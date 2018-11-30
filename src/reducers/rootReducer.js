import { combineReducers } from "redux";
import userLogin from "./authReducer/loginReducer";
import userSignUp from "./authReducer/signupReducer";
import entriesReducer from "./entriesReducer/entryReducer";

const reducers = combineReducers({
  userLogin,
  userSignUp,
  entriesReducer
});

export default reducers;
