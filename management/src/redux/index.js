import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import loginInfo from './reducers/login'
import sidebar from './reducers/sidebar'
import leagues from './reducers/league'
import teams from './reducers/teams'

const store = createStore(combineReducers({
  loginInfo,
  sidebar,
  leagues,
  teams
}), applyMiddleware(promiseMiddleware, logger))

export default store
