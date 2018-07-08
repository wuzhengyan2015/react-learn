import { createActions } from "redux-actions"

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const {increment, decrement} = createActions({
  [INCREMENT]: (mount = 1) => mount,
  [DECREMENT]: (mount = 1) => -mount
})


