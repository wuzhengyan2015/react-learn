import { createActions } from 'redux-actions'
import api from '../../services/index'

export const GET_LEAGUES = 'GET_LEAGUES'
export const SEARCH_LEAGUES = 'SEARCH_LEAGUES'

export const { getLeagues, seachLeagues } = createActions({
  GET_LEAGUES: (page, limit) => api.getLeagues(page, limit),
  SEARCH_LEAGUES: (page, limit, query) => api.getLeagues(page, limit, query)
})

console.log(getLeagues, seachLeagues)
