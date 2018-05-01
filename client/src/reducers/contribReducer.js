import {GET_TOP_CONTRIB, SEARCHING} from "../actions";

export default function(state = null, action) {
  switch (action.type) {

    case GET_TOP_CONTRIB:
      return action.payload;

    case SEARCHING:
      return action.payload;

    default:
      return state;
  }
}
