import { handleActions } from 'redux-actions'
import { GET_TEAMS } from '../actions/teams'

const handleTeams = list => list.map((item) => {
  const keyItem = item
  keyItem.key = item.id + 1
  return keyItem
})

const reducer = handleActions({
  [GET_TEAMS]: {
    next: (state, action) => ({
      list: {
        items: handleTeams(action.payload[0]), total: action.payload[1].length
      }
    }),
    throw: (state, action) => {
      console.log(state, action)
      return state
    }
  }
}, { list: { items: [], total: 0 } })

export default reducer
