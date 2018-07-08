import {handleActions, combineActions} from 'redux-actions'
import {counterActions, INCREMENT_ASYNC} from './actions'

const defaultState = { counter: 0 }

const reducer = handleActions({
    [combineActions(counterActions.increment, counterActions.decrement)] (state, action) {
        return {counter: state.counter + action.payload}
    },
    [INCREMENT_ASYNC] (state, action) {
        return {counter: state.counter + action.payload}
    }
}, defaultState)

export default reducer