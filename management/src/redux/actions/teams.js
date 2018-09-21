import { createActions } from 'redux-actions'
import api from '../../services/index'

export const GET_TEAMS = 'GET_TEAMS'
export const ADD_TEAMS = 'ADD_TEAMS'
export const PUT_TEAMS = 'PUT_TEAMS'
export const DELETE_TEAMS = 'DELETE_TEAMS'

export const {
  getTeams, addTeams, putTeams, deleteTeams
} = createActions({
  GET_TEAMS: api.getTeams,
  ADD_TEAMS: api.addTeams,
  PUT_TEAMS: api.putTeams,
  DELETE_TEAMS: api.deleteTeams
})
