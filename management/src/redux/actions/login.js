import { createActions } from 'redux-actions'
import api from '../../services/index'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const { login, logout } = createActions({
  LOGIN: api.login,
  LOGOUT: api.logout
})
