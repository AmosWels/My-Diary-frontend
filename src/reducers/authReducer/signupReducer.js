import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  user: {},
};

const userSignUp = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPE.SIGNUP_ACTION:
    return {
      ...state,
      user: action.payload
    };
  default:
    return state;
  }
};
export default userSignUp;
