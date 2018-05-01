import { combineReducers } from "redux";
import { reducer as reduxReducer } from "redux-form";
import repoReducer from "./repoReducer.js"
import contribReducer from "./contribReducer.js"

const rootReducer = combineReducers({
  form: reduxReducer,
  repos: repoReducer,
  contributors: contribReducer
});

export default rootReducer;
