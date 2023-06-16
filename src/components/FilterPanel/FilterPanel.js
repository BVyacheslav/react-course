import { useDispatch, useSelector } from "react-redux";
import { SET_TYPE_FILTER } from "../../redux/actions";

export const FilterPanel = () => {

  const dispatch = useDispatch();
  const { typeFilter } = useSelector((state) => state.filter);

  return (
    <div className="inputWrapper">
      <label htmlFor="filter">Поиск</label>
      <input id="filter" value={typeFilter} onChange={(e) => {
        dispatch({
          type: SET_TYPE_FILTER,
          payload: e.target.value,
        });
      }} />
    </div>
  )
}
