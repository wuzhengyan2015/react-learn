import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import loginInfo from './reducers/login'
import sidebar from './reducers/sidebar'

const store = createStore(combineReducers({
  loginInfo,
  sidebar
}), applyMiddleware(promiseMiddleware, logger))

export default store
