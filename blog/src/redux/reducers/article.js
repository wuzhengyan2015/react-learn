import {GET_ARTICLES_PENDING, GET_ARTICLES_FULFILLED, GET_ARTICLES_REJECTED} from '../actions/article'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ARTICLES_PENDING:
            return {
                isPending: true
            }
        case GET_ARTICLES_FULFILLED:
            return {
                body: action.payload
            }
        case GET_ARTICLES_REJECTED:
            return {
                body: action.payload
            }
        default:
            return state
    }
}

export default reducer