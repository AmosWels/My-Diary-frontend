import LOGIN_ACTION from "../../actions/actionTypes";

const initialState = {
  user: {},
  isLoggedIn: false
};

export default function userLogin(state = initialState, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      isLoggedIn: action.payload
    };
  default:
    return state;
  }
}
