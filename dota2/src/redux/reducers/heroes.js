import {
  GET_HEROES_PENDING,
  GET_HEROES_FULFILLED,
  GET_HEROES_REJECTED
} from "../actions/heroes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_HEROES_PENDING:
      return {
        isPending: true
      };
    case GET_HEROES_FULFILLED:
      return {
        body: action.payload
      };
    case GET_HEROES_REJECTED:
      return {
        body: action.payload
      }
    default: 
      return state
  }
};

export default reducer