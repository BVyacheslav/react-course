import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM, SET_TYPE_VALUE, SET_PRICE_VALUE, SET_SELECTED_ITEM_ID, CLEAR_FORM } from "../../redux/actions";

export const Table = () => {

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const { selectedItemId } = useSelector((state) => state.form);

  const handleEdit = (item) => (e) => {
    dispatch({
      type: SET_TYPE_VALUE,
      payload: item.type,
    });
    dispatch({
      type: SET_PRICE_VALUE,
      payload: item.price,
    });

    dispatch({
      type: SET_SELECTED_ITEM_ID,
      payload: item.id
    });
  }

  const handleDelete = (id) => (e) => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
    if (selectedItemId) {
      dispatch({
        type: CLEAR_FORM,
      });
    }
  }

  return (
    <div>
      <div>
        {items.map(item =>
          <div className="item" key={item.id}>
            <span>{'★ ' + item.type + ' ' + item.price}</span>
            <div>
              <button className="deleteButton" onClick={handleEdit(item)}>✎</button>
              <button className="deleteButton" onClick={handleDelete(item.id)}>✘</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
