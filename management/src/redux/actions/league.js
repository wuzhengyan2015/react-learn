import { createActions } from 'redux-actions'
import api from '../../services/index'

export const GET_LEAGUES = 'GET_LEAGUES'
export const SEARCH_LEAGUES = 'SEARCH_LEAGUES'
export const ADD_LEAGUE = 'ADD_LEAGUE'
export const PUT_LEAGUE = 'PUT_LEAGUE'
export const DELETE_LEAGUE = 'DELETE_LEAGUE'

export const {
  getLeagues, searchLeagues, addLeague, putLeague, deleteLeague
} = createActions({
  GET_LEAGUES: (page, limit) => api.getLeagues(page, limit),
  SEARCH_LEAGUES: (page, limit, query) => api.getLeagues(page, limit, query),
  ADD_LEAGUE: api.addLeague,
  PUT_LEAGUE: api.putLeague,
  DELETE_LEAGUE: api.deleteLeague,
})
