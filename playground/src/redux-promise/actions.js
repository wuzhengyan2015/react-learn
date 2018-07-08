import {createActions} from 'redux-actions'

export const INCREMENT = 'INCREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const DECREMENT = 'DECREMENT'

function addAsync (mount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mount)
        }, 1000)
    })
}

export const counterActions = createActions({
    [INCREMENT]: (mount = 1) => mount,
    [DECREMENT]: (mount = 1) => -mount,
    [INCREMENT_ASYNC]: async (mount = 1) => {
        return await addAsync(mount)
    }
})
