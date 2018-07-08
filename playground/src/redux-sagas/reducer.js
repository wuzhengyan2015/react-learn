import {handleActions, combineActions} from 'redux-actions'
import {counterActions} from './actions'

const defaultState = { counter: 0 }

const reducer = handleActions({
    [combineActions(counterActions.increment, counterActions.decrement)] (state, action) {
        return {counter: state.counter + action.payload}
    }
}, defaultState)

export default reducer