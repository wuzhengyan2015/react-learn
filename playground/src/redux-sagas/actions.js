import {createActions} from 'redux-actions'

export const INCREMENT = 'INCREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const DECREMENT = 'DECREMENT'

export const counterActions = createActions({
    [INCREMENT]: (mount = 1) => mount,
    [DECREMENT]: (mount = 1) => -mount
}, 'INCREMENT_ASYNC')