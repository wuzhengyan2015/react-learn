import {
  GET_HEROES_PENDING,
  GET_HEROES_FULFILLED,
  GET_HEROES_REJECTED
} from "../actions/heroes";
import {SET_CUR_HERO} from "../actions/heroes";
import { combineReducers } from "redux";

const list = (state = {}, action) => {
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
      };
    default:
      return state;
  }
};

const cur = (state = {}, action) => {
  switch (action.type) {
    case SET_CUR_HERO:
      return { ...action.data };
    default:
      return state;
  }
};

export default combineReducers({
  list,
  cur
});
