import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";

import formReducer from './formReducer';
import itemsReducer from './itemsReducer';
import filterReducer from './filterReducer';


const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      form: formReducer,
      items: itemsReducer,
      filter: filterReducer
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;
