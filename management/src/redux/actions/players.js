import { createAction } from 'redux-actions'
import api from '../../services/index'

export const GET_PLAYERS = 'GET_PLAYERS'

export const getPlayers = createAction(GET_PLAYERS, api.getPlayers)
