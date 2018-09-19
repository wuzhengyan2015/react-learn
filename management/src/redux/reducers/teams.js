import { handleActions } from 'redux-actions'
import { GET_TEAMS } from '../actions/teams'

const reducer = handleActions({
  [GET_TEAMS]: {
    next: (state, action) => ({
      list: {
        items: action.payload[0], total: action.payload[1].length
      }
    }),
    throw: (state, action) => {
      console.log(state, action)
      return state
    }
  }
}, { list: { items: [], total: 0 } })

export default reducer
