import { combineReducers } from "redux";
import userLogin from "./authReducer/loginReducer";
import userSignUp from "./authReducer/signupReducer";

const reducers = combineReducers({
  userLogin,
  userSignUp
});

export default reducers;
