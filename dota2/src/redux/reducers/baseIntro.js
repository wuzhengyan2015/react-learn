import {
  GET_BASE_INTRO_PENDING,
  GET_BASE_INTRO_FULFILLED,
  GET_BASE_INTRO_REJECTED
} from "../actions/baseIntro";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BASE_INTRO_PENDING:
      return {
        isPending: true
      };
    case GET_BASE_INTRO_FULFILLED:
      return {
        body: action.payload
      };
    case GET_BASE_INTRO_REJECTED:
      return {
        body: action.payload
      };
    default:
      return state
  }
}

export default reducer