import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_TYPE_VALUE, SET_PRICE_VALUE, ADD_ITEM, EDIT_ITEM, CLEAR_FORM, SET_SELECTED_ITEM_ID } from "../../redux/actions";

export const Form = () => {

  const dispatch = useDispatch();
  const { typeValue, priceValue, selectedItemId } = useSelector((state) => state.form);
  const [countId, setCountId] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedItemId > 0 ?
      dispatch({
        type: EDIT_ITEM,
        payload: { id: selectedItemId, type: typeValue, price: priceValue },
      })
      :
      dispatch({
        type: ADD_ITEM,
        payload: { id: countId, type: typeValue, price: priceValue },
      })

    dispatch({ type: CLEAR_FORM });
    dispatch({
      type: SET_SELECTED_ITEM_ID,
      payload: 0
    });

    setCountId(countId + 1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputWrapper">
        <label htmlFor="work">Работа</label>
        <input id="work" value={typeValue}
          onChange={(e) => {
            dispatch({
              type: SET_TYPE_VALUE,
              payload: e.target.value,
            });
          }} />
      </div>
      <div className="inputWrapper">
        <label htmlFor="price">Стоимость</label>
        <input id="price" type="number" value={priceValue} onChange={(e) => {
          dispatch({
            type: SET_PRICE_VALUE,
            payload: e.target.value,
          });
        }} />
      </div>
      <button className="addButton" type="submit">Save</button>
      {selectedItemId > 0 && <button
        className="addButton"
        type="button"
        onClick={() => dispatch({ type: CLEAR_FORM })}>
        Cancel
      </button>}
    </form>
  )
}
