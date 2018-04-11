import {GET_LIFES_PENDING, GET_LIFES_FULFILLED, GET_LIFES_REJECTED} from '../actions/life'

export default function reducers(state ={}, action) {
    switch (action.type) {
        case GET_LIFES_PENDING:
            return {
                isPending: true
            }
        case GET_LIFES_FULFILLED: {
            return {
                body: action.payload
            }
        }
        case GET_LIFES_REJECTED: {
            return {
                body: action.payload
            }
        }
        default: return state
    }
}