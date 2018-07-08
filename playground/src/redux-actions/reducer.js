import {handleActions, handleAction, combineActions} from 'redux-actions'
import {INCREMENT, DECREMENT, increment, decrement} from './action'

const defaultState = { count: 1 }
const reducer = handleActions({
  [INCREMENT]: {
    next(state, action) {
      return {
        count: state.count + action.payload
      }
    },
    throw(state, action) {},
  },
  [DECREMENT]: (state, action) => {
    return {
      count: state.count + action.payload
    }
  }
}, defaultState)

const reducer2 = handleAction(combineActions(increment, decrement), {
  next: (state, { payload }) => ({ ...state, count: state.count + payload }),
  throw: state => ({ ...state, counter: 0 }),
}, { count: 10 })

const reducer3 = handleActions(
  {
    [combineActions(increment, decrement)](state, {payload}) {
      return { ...state, count: state.count + payload }
    }
  },
  { count: 10 }
)

export default reducer2