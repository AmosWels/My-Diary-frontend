import ACTION_TYPE from "../../actions/actionTypes";

const initialState = {
  entries:[],
  entry:{},
  deleted:{},
  modify:{}
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_TYPE.NEW_ENTRY:
    return {
      ...state,
      entry: action.payload
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
  case ACTION_TYPE.MODIFY_ENTRY:
    return {
      ...state,
      modify: action.payload
    };
  default:
    return state;
  }
};

export default entriesReducer;
