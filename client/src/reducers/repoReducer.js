import {SUBMIT_SEARCH} from "../actions";

export default function(state = null, action) {
  switch (action.type) {

    case SUBMIT_SEARCH:
      return action.payload;

    default:
      return state;
  }
}
