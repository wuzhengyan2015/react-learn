import { handleActions } from 'redux-actions'
import { GET_LEAGUES, SEARCH_LEAGUES } from '../actions/league'

const handleLeagues = list => list.map((item) => {
  const keyItem = item
  keyItem.key = item.id + 1
  return keyItem
})

const reducer = handleActions({
  [GET_LEAGUES]: {
    next(state, action) {
      return {
        list: {
          items: handleLeagues(action.payload[0]), total: action.payload[1].length
        }
      }
    },
    throw(state) {
      return state
    }
  },
  [SEARCH_LEAGUES]: {
    next(state, action) {
      return {
        list: {
          items: handleLeagues(action.payload[0]), total: action.payload[1].length
        }
      }
    },
    throw(state) {
      return state
    }
  }
}, { list: { items: [], total: 0 } })

export default reducer
