import  SIGNUP_ACTION  from "../../actions/actionTypes";

export const initialState = {
  user:{}
};

export default function userSignUp(state = initialState, action) {
  switch (action.type) {
  case SIGNUP_ACTION:
    return {
      ...state,
      user: action.payload
    };
  default:
    return state;
  }
}
