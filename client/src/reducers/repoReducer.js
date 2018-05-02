import {GET_REPOS} from "../actions";

export default function(state = null, action) {
  switch (action.type) {

    case GET_REPOS:
      return action.payload;

    default:
      return state;
  }
}
