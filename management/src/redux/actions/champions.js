import { createAction } from 'redux-actions'
import api from '../../services/index'

export const GET_CHAMPIONS = 'GET_CHAMPIONS'

export const getChampions = createAction(GET_CHAMPIONS, api.getChampions)
