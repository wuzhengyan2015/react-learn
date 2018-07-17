import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT } from '../actions/login'

const reducer = handleActions({
  [LOGIN]: {
    next(state, action) {
      return { ...state, isLogin: true, ...action.payload }
    },
    throw() {
      return { isLogin: false }
    }
  },
  [LOGOUT]: {
    next() {
      return { isLogin: false }
    },
    throw(state) {
      return state
    }
  }
}, { isLogin: false })

export default reducer
