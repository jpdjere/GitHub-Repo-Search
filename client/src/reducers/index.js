import { combineReducers } from "redux";
import { reducer as reduxReducer } from "redux-form";
import repoReducer from "./repoReducer.js"

const rootReducer = combineReducers({
  form: reduxReducer,
  repos: repoReducer
});

export default rootReducer;
