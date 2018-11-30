import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  entries:[]
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPE.NEW_ENTRY:
    return {
      ...state,
      article: action.payload
    };
  case ACTION_TYPE.VIEW_ENTRIES:
    return {
      ...state,
      entries: action.payload,
    };
  case ACTION_TYPE.VIEW_ONE_ENTRY:
    return {
      ...state,
      oneentry: action.payload
    };
  case ACTION_TYPE.DELETE_ONE_ENTRY:
    return {
      ...state,
      deleted: action.payload
    };
  default:
    return state;
  }
};

export default entriesReducer;
