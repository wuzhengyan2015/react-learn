import {
  GET_ITEMS_FULFILLED,
  GET_ITEMS_PENDING,
  GET_ITEMS_REJECTED
} from "../actions/items";

const items = (state = {}, action) => {
  switch (action.type) {
    case GET_ITEMS_PENDING:
      return { isPending: true };
    case GET_ITEMS_FULFILLED:
      return { body: action.payload };
    case GET_ITEMS_REJECTED:
      return { body: action.payload };
    default: 
      return state
  }
};

export default items
