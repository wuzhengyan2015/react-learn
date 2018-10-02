import { handleActions } from 'redux-actions';
import { GET_PLAYERS, GET_SCROLL_PLAYERS } from '../actions/players';

export default handleActions(
  {
    [GET_PLAYERS]: (state, action) => ({
      ...state,
      list: action.payload
    }),
    [GET_SCROLL_PLAYERS]: (state, action) => ({
      ...state,
      list2: action.payload
    })
  },
  { list: [], list2: [] }
);
