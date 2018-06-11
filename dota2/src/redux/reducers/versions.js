import {
  GET_VERSIONS_FULFILLED,
  GET_VERSIONS_PENDING,
  GET_VERSIONS_REJECTED
} from "../actions/versions";

const versions = (state = {}, action) => {
  switch (action.type) {
    case GET_VERSIONS_PENDING:
      return { isPending: true };
    case GET_VERSIONS_FULFILLED:
      return { body: action.payload };
    case GET_VERSIONS_REJECTED:
      return { body: action.payload };
    default: 
      return state
  }
};

export default versions
