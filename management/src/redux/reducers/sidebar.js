import { handleAction } from 'redux-actions'
import { COLLAPSE_SIDEBAR } from '../actions/sidebar'

export default handleAction(COLLAPSE_SIDEBAR, state => ({
  collapsed: !state.collapsed
}), { collapsed: false })
