import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reduces'

const store = createStore(reducer, {}, applyMiddleware(
    thunkMiddleware,
    promiseMiddleware(),
    logger
))

export default store