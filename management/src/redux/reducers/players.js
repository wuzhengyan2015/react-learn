import { handleAction } from 'redux-actions'
import { GET_PLAYERS } from '../actions/players'

export default handleAction(
  GET_PLAYERS,
  (state, action) => ({
    list: action.payload
  }),
  { list: [] }
)
