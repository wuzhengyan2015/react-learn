import {createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

export const getPost = id => ({
    type: 'GET_POST',
    payload: new Promise(resolve => {
        setTimeout(() => fetch(`api/posts`).then(response => {
            resolve(response.json())
        }), 1000)
    })
})

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POST_PENDING':
            return {
                isPending: true
            }
        case 'GET_POST_FULFILLED':
            return {
                body: action.payload
            }
        default: 
            return state
    }
}

const store = createStore(reducer, {}, applyMiddleware (
    thunkMiddleware,
    promiseMiddleware(),
    logger
))

export default store