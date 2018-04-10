import {GET_DROPS_PENDING, GET_DROPS_FULFILLED, GET_DROPS_REJECTED} from '../actions/drop'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DROPS_PENDING: 
            return {
                isPending: true
            }
        case GET_DROPS_FULFILLED: 
            return {
                body: action.payload
            }
        case GET_DROPS_REJECTED:
            return {
                body: action.payload
            }
        default: return state
    }
}

export default reducer