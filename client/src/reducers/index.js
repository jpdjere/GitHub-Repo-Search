import { combineReducers } from "redux";
import { reducer as reduxReducer } from "redux-form";
import repoReducer from "./repoReducer.js"
import contribReducer from "./contribReducer.js"
import miscReducer from "./miscReducer.js"
import searchTermReducer from "./searchTermReducer.js"

const rootReducer = combineReducers({
  form: reduxReducer,
  repos: repoReducer,
  contributors: contribReducer,
  searchTerm: searchTermReducer,
  misc: miscReducer
});

export default rootReducer;
