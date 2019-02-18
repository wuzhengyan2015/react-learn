const createStore = (reducer, preloadState) => {
  let state = preloadState
  const listeners = []
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    console.log(state)
    listeners.forEach(l => l())
  }
  state = reducer(state, {})
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners.filter(l => l !== listener)
    }
  }
  return { getState, dispatch, subscribe }
}

export { createStore }