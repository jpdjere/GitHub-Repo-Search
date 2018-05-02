import {SHOW_LOADER, HIDE_LOADER} from "../actions";

export default function(state = null, action) {
  switch (action.type) {

    case SHOW_LOADER:
      return action.payload;

    case HIDE_LOADER:
      return action.payload;

    default:
      return state;
  }
}
