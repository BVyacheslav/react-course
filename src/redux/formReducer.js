import { SET_PRICE_VALUE, SET_TYPE_VALUE, CLEAR_FORM, SET_SELECTED_ITEM_ID } from "./actions";

const initialState = {
  typeValue: '',
  priceValue: '',
  selectedItemId: 0
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE_VALUE:
      return {
        ...state,
        typeValue: action.payload
      }
    case SET_PRICE_VALUE:
      return {
        ...state,
        priceValue: action.payload,
      }
    case SET_SELECTED_ITEM_ID:
      return {
        ...state,
        selectedItemId: action.payload
      }
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export default formReducer;
