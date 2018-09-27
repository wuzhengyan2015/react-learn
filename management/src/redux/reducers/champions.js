import { handleAction } from 'redux-actions'
import { GET_CHAMPIONS } from '../actions/champions'

export default handleAction(
  GET_CHAMPIONS,
  (state, action) => ({
    list: action.payload
  }),
  { list: [] }
)
