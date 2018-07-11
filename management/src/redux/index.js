import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import sidebar from './reducers/sidebar'

const store = createStore(combineReducers({
  sidebar
}), applyMiddleware(promiseMiddleware, logger))

export default store
