import {
    GET_ARCHIVE_PENDING,
    GET_ARCHIVE_FULFILLED,
    GET_ARCHIVE_REJECTED,
    GET_CATEGORY_PENDING,
    GET_CATEGORY_FULFILLED,
    GET_CATEGORY_REJECTED
} from '../actions/archive'

const reducer = (state = { categories: {}, items: {} }, action) => {
    switch (action.type) {
        case GET_ARCHIVE_PENDING:
            return {
                categories: {
                    ...state.categories
                }, 
                items: {
                    isPending: true
                } 
            }
        case GET_ARCHIVE_FULFILLED:
            return {
                categories: {
                    ...state.categories
                }, 
                items: {
                    body: action.payload
                } 
            }
        case GET_ARCHIVE_REJECTED:
            return {
                categories: {
                    ...state.categories
                }, 
                items: {
                    body: action.payload
                } 
            }
        case GET_CATEGORY_PENDING:
            return {
                categories: {
                    isPending: true
                }, 
                items: {
                    ...state.archive
                } 
            }
        case GET_CATEGORY_FULFILLED:
            return {
                categories: {
                    body: action.payload
                }, 
                items: {
                    ...state.archive
                }
            }
        case GET_CATEGORY_REJECTED:
            return {
                categories: {
                    body: action.payload
                }, 
                items: {
                    ...state.archive
                }
            }
        default:
            return state
    }
}

export default reducer