import { ADD_ITEM, DELETE_ITEM, SET_SELECTED_ITEM_ID, EDIT_ITEM } from "./actions";

const initialState = {
  items: [
    {
      id: 1,
      type: 'Замена стекла',
      price: 21000
    },
    {
      id: 2,
      type: 'Замена дисплея',
      price: 25000
    },
  ],
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ?
          { ...item, type: action.payload.type, price: action.payload.price } : item)
      }
    default:
      return state;
  }
};

export default itemsReducer;
