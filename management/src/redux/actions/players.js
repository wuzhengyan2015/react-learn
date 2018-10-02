import { createAction } from 'redux-actions';
import api from '../../services/index';

export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_SCROLL_PLAYERS = 'GET_SCROLL_PLAYERS';

export const getPlayers = createAction(GET_PLAYERS, api.getPlayers);
export const getScrollPlayers = createAction(
  GET_SCROLL_PLAYERS,
  api.getPlayers
);
