import { combineReducers } from "redux";
import { reducer as reduxReducer } from "redux-form";
import repoReducer from "./repoReducer.js"
import contribReducer from "./contribReducer.js"
import miscReducer from "./miscReducer.js"

const rootReducer = combineReducers({
  form: reduxReducer,
  repos: repoReducer,
  contributors: contribReducer,
  misc: miscReducer
});

export default rootReducer;
