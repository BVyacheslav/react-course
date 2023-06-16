import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";

import formReducer from './formReducer';
import itemsReducer from './itemsReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      form: formReducer,
      items: itemsReducer
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;
