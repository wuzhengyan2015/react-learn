import { createActions } from 'redux-actions'
import api from '../../services/index'

export const GET_TEAMS = 'GET_TEAMS'

export const { getTeams } = createActions({
  GET_TEAMS: api.getTeams
})
