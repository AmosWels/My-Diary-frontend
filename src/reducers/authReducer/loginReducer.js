import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  user:{},
  isLoggedIn: false
};

export default function userLogin(state = initialState, action) {
  switch (action.type) {
  case ACTION_TYPE.LOGIN_ACTION:
    return {
      ...state,
      user:action.payload,
      isLoggedIn: true
    };
  default:
    return state;
  }
}
