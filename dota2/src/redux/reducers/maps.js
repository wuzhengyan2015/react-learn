import {
  GET_MAPS_FULFILLED,
  GET_MAPS_PENDING,
  GET_MAPS_REJECTED
} from "../actions/maps";

const maps = (state = {}, action) => {
  switch (action.type) {
    case GET_MAPS_PENDING:
      return { isPending: true };
    case GET_MAPS_FULFILLED:
      return { body: action.payload };
    case GET_MAPS_REJECTED:
      return { body: action.payload };
    default: 
      return state
  }
};

export default maps
