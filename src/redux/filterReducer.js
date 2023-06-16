import { SET_TYPE_FILTER } from "./actions";

const initialState = {
  typeFilter: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE_FILTER:
      return {
        ...state,
        typeFilter: action.payload
      }
    default:
      return state;
  }
};

export default filterReducer;