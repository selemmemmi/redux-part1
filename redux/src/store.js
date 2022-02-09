import { createStore } from "redux";
import rootReducers from "./reducers";

const stort = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default stort;
